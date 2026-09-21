"use client";

import { useState, type FormEvent } from "react";
import { Minus, Plus, MessageCircle, CheckCircle2 } from "lucide-react";
import { products, siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl, getFormOrderMessage } from "@/lib/whatsapp";

type FormErrors = Partial<Record<"name" | "phone" | "address" | "city", string>>;

const MAX_QUANTITY = 20;

function isValidPakistaniPhone(value: string): boolean {
  const digits = value.replace(/[\s-]/g, "");
  return /^(0|\+92)3\d{9}$/.test(digits);
}

const fieldClass = (hasError: boolean) =>
  `w-full rounded-xl border px-4 py-3 text-sm text-novira-black outline-none transition-colors bg-novira-cream focus:border-novira-gold ${
    hasError ? "border-red-400" : "border-novira-gold/30"
  }`;

export default function OrderForm() {
  const product = products[0];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [ready, setReady] = useState(false);

  const subtotal = product.price * quantity;
  const total = subtotal + product.deliveryCharges;

  function decrease() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function increase() {
    setQuantity((q) => Math.min(MAX_QUANTITY, q + 1));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!isValidPakistaniPhone(phone))
      next.phone = "Please enter a valid Pakistani mobile number.";
    if (address.trim().length === 0)
      next.address = "Please enter your complete delivery address.";
    if (city.trim().length === 0) next.city = "Please enter your city.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setReady(false);
      return;
    }

    const message = getFormOrderMessage({
      name: name.trim(),
      phone: phone.trim(),
      quantity,
      subtotal,
      total,
      address: address.trim(),
      city: city.trim(),
    });

    setReady(true);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="order" className="bg-novira-beige py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            Order
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Place Your Order
          </h2>
          <p className="mt-3 text-base text-novira-black/70 sm:text-lg">
            Complete your details and continue to WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="reveal mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-start"
        >
          <div className="rounded-3xl border border-novira-gold/25 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-lg font-semibold text-novira-black">
              Customer Information
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="order-name"
                  className="mb-1 block text-sm font-medium text-novira-black/80"
                >
                  Full Name *
                </label>
                <input
                  id="order-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "order-name-error" : undefined}
                  className={fieldClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="order-name-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="order-phone"
                  className="mb-1 block text-sm font-medium text-novira-black/80"
                >
                  Mobile Number *
                </label>
                <input
                  id="order-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03XX XXXXXXX"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "order-phone-error" : undefined}
                  className={fieldClass(!!errors.phone)}
                />
                {errors.phone && (
                  <p id="order-phone-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="order-address"
                  className="mb-1 block text-sm font-medium text-novira-black/80"
                >
                  Complete Address *
                </label>
                <textarea
                  id="order-address"
                  name="address"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House/Street/Village, Area"
                  aria-required="true"
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "order-address-error" : undefined}
                  className={fieldClass(!!errors.address)}
                />
                {errors.address && (
                  <p id="order-address-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.address}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="order-city"
                  className="mb-1 block text-sm font-medium text-novira-black/80"
                >
                  City *
                </label>
                <input
                  id="order-city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city"
                  aria-required="true"
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "order-city-error" : undefined}
                  className={fieldClass(!!errors.city)}
                />
                {errors.city && (
                  <p id="order-city-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <span className="mb-1 block text-sm font-medium text-novira-black/80">
                  Quantity *
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={decrease}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-novira-gold/40 text-novira-black transition-colors hover:bg-novira-gold/10 disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span
                    className="w-10 text-center font-display text-lg font-semibold text-novira-black"
                    aria-live="polite"
                    aria-label={`Quantity: ${quantity}`}
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increase}
                    disabled={quantity >= MAX_QUANTITY}
                    aria-label="Increase quantity"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-novira-gold/40 text-novira-black transition-colors hover:bg-novira-gold/10 disabled:opacity-40"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-novira-gold/25 bg-novira-black p-6 text-novira-cream shadow-card sm:p-8">
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
              Your Order
            </h3>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-novira-cream/70">Product</dt>
                <dd>{product.name}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-novira-cream/70">Size</dt>
                <dd>{product.size}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-novira-cream/70">Price</dt>
                <dd>Rs. {product.price.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-novira-cream/70">Quantity</dt>
                <dd>{quantity}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-novira-gold/15 pt-3">
                <dt className="text-novira-cream/70">Subtotal</dt>
                <dd>Rs. {subtotal.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-novira-cream/70">Delivery Charges</dt>
                <dd>Rs. {product.deliveryCharges.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-novira-gold/20 pt-3 font-display text-lg font-semibold text-novira-gold">
                <dt>Total</dt>
                <dd>Rs. {total.toLocaleString()}</dd>
              </div>
            </dl>

            <button type="submit" className="gold-btn mt-8 w-full py-4 text-base">
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </button>

            {ready && (
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-novira-cream/70">
                <CheckCircle2 className="h-4 w-4 text-novira-gold" />
                Your order details are ready — opening WhatsApp...
              </p>
            )}

            <p className="mt-4 text-center text-xs text-novira-cream/50">
              WhatsApp: {siteConfig.displayWhatsapp}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
