import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as apiClient from "../api-client";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";

type AppContextType = {
  showToast: (message: string, type: "SUCCESS" | "ERROR") => void;
  isLoggedIn: boolean;
  stripePromise: Promise<Stripe | null>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const stripePromise = loadStripe(STRIPE_PUB_KEY);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const showToast = (message: string, type: "SUCCESS" | "ERROR") => {
    if (type === "SUCCESS") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  useQuery("validateToken", apiClient.validateToken, {
    retry: false,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: () => {
      setIsLoggedIn(false);
    },
  });

  return (
    <AppContext.Provider value={{ showToast, isLoggedIn, stripePromise }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
