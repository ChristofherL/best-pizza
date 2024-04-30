import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

export const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
export const stripePromise = loadStripe(import.meta.env.VITE_STIPE_PUBLIC_KEY);