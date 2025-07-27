import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

export interface CartItem {
  productName: string;
  color: string;
  size: string;
  price: number;
}

export interface ContextType {
  addItem: (item: CartItem) => void;
  clear: () => void;
  items: CartItem[];
  removeItem: (item: CartItem) => void;
  removeItemGroup: (item: CartItem) => void;
  setRef: (ref: string) => void;
  ref: string;
  isPrivacyDisplayed: boolean;
  setIsPrivacyDisplayed: (isPrivacyDisplayed: boolean) => void;
  allowData: boolean;
  allowDataSelected: (allowData: boolean) => void;
}

export const Context = React.createContext<ContextType>({
  addItem: () => {
    /* nothing */
  },
  clear: () => {
    /* nothing */
  },
  items: [],
  removeItem: () => {
    /* nothing */
  },
  removeItemGroup: () => {
    /* nothing */
  },
  setRef: () => {
    /* nothing */
  },
  ref: '',
  isPrivacyDisplayed: false,
  setIsPrivacyDisplayed: () => {
    /* nothing */
  },
  allowData: false,
  allowDataSelected: () => {
    /* nothing */
  },
});

const doItemsMatch = (item1: CartItem, item2: CartItem) =>
  item1.productName === item2.productName &&
  item1.color === item2.color &&
  item1.size === item2.size;

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ref, setRef] = useState<string>('');
  const [allowData, setAllowData] = useState<boolean>(false);
  const [isPrivacyDisplayed, setIsPrivacyDisplayed] = useState<boolean>(false);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('cart-items') ?? '[]'));
    setRef(localStorage.getItem('r') ?? '[none]');
    const storedAllowData = localStorage.getItem('allow-data');
    setAllowData(storedAllowData === 'true');
    setIsPrivacyDisplayed(storedAllowData == null);
  }, []);

  const addItem = (item: CartItem) => setItems(oldItems => [...oldItems, item]);
  const removeItem = (item: CartItem) =>
    setItems(oldItems => {
      const newItems = [...oldItems];
      const matchingItems = newItems.filter(newItem =>
        doItemsMatch(newItem, item)
      );
      const index = newItems.indexOf(matchingItems[matchingItems.length - 1]);
      newItems.splice(index, 1);
      return newItems;
    });
  const removeItemGroup = (item: CartItem) =>
    setItems(oldItems =>
      oldItems.filter(oldItem => !doItemsMatch(oldItem, item))
    );
  const clear = () => setItems([]);

  const allowDataSelected = (allowDataSelection: boolean) => {
    setAllowData(allowDataSelection);
    localStorage.setItem('allow-data', allowDataSelection.toString());
    setIsPrivacyDisplayed(false);
  };

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('r', ref);
  }, [ref]);

  return (
    <Context.Provider
      value={{
        items,
        addItem,
        removeItem,
        removeItemGroup,
        clear,
        ref,
        setRef,
        isPrivacyDisplayed,
        setIsPrivacyDisplayed,
        allowData,
        allowDataSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
};
