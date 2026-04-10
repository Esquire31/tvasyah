import React, { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartNav: React.FC<CartNavProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '24K Radiance Face Oil',
      price: 124,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhxUz9uwx-3cUfvT7XM7sv9appxz1bs475OE44XLK-07QuJF4lhb4Z3yxPiQ2d_s8hJ5ywM512s9UUUDsww5dRehRf5dpy0F7sxD5RCkyOGLD9Tay64-dCJFA6yOZBwI_iB1ZouI8Ew1FfnVWZh-XLYsY6mvCn0HrwJbKNUwI1fAeimm4n1AKHp7wJkjCKTM5L_ni7S3VUwhTIl8wL9-6uYK8GRQ9Rg8waFcp_PHertov6LfzVNX1JI6-T-lSRrmNIBa5Wnqm32w'
    }
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

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
                    <p className="font-serif text-moss-green dark:text-white">${item.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-sage/20 rounded-full px-2 py-1">
                        <button 
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="p-1 hover:text-gold-muted transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="p-1 hover:text-gold-muted transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        onClick={() => handleRemove(item.id)}
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
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sage dark:text-gray-400">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-serif text-moss-green dark:text-white border-t border-sage/10 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full py-4 bg-moss-green text-white rounded-full uppercase text-[11px] tracking-widest font-medium hover:bg-moss-green/90 transition-all shadow-lg active:scale-[0.98]">
              Proceed to Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full py-3 border border-sage/20 text-sage dark:text-gray-300 dark:border-sage/30 rounded-full uppercase text-[11px] tracking-widest font-medium hover:bg-cream-soft dark:hover:bg-background-dark/50 transition-all"
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
