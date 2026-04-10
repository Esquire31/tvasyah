import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartNavProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onQuantityChange: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartNav: React.FC<CartNavProps> = ({ isOpen, onClose, cartItems, onQuantityChange, onRemove }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Slide-out Cart */}
      <div 
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white dark:bg-background-dark z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sage/10">
          <h2 className="text-2xl font-serif text-moss-green dark:text-white italic">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-cream-soft dark:hover:bg-background-dark/50 rounded-full transition-colors"
          >
            <X size={24} className="text-sage dark:text-gray-400" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center">
              <p className="text-sage/60 dark:text-gray-400">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <img 
                  alt={item.name}
                  src={item.image}
                  className="w-24 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm text-sage dark:text-white">{item.name}</h3>
                    <p className="text-xs text-sage/60 dark:text-gray-400 mt-1">30ml / 1.01 fl. oz</p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-serif text-moss-green dark:text-white">₹{item.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-sage/20 rounded-full px-2 py-1">
                        <button 
                          onClick={() => onQuantityChange(item.id, -1)}
                          className="p-1 hover:text-gold-muted transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onQuantityChange(item.id, 1)}
                          className="p-1 hover:text-gold-muted transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-sage/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-sage/10 p-6 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-sage dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sage dark:text-gray-400">
                <span>Tax (10%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-serif text-moss-green dark:text-white border-t border-sage/10 pt-2">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-moss-green text-gold-muted hover:text-text-green hover:bg-gold-muted px-10 py-3 rounded-full font-semibold text-[11px] tracking-widest uppercase transition-all shadow-xl shadow-emerald-green/10">
              Proceed to Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full py-3 border border-sage/20 text-sage dark:text-gray-300 dark:border-sage/30 rounded-full uppercase text-[11px] tracking-widest font-medium hover:bg-cream dark:hover:bg-background-dark/50 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartNav;
