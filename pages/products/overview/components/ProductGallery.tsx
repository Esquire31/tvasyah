import React from 'react';
import { PRODUCTS } from '../../../../constants';

const ProductGallery: React.FC = () => {
  return (
    <div className="lg:col-span-7 grid grid-cols-12 gap-4">
      <div className="col-span-12 relative overflow-hidden group">
        <img 
          alt="Tvasyah Featured Product" 
          className="w-full h-[600px] object-cover rounded-2xl" 
          src={PRODUCTS[0]?.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzgKEY5-u6CTfI7IlhqUBS_7N22DNqxVmH4I9c1C07MUTf5gJtqisLlMqb8neoEm3iRv0puw1Dq3CnyB0w8XP8TkEBmr8MgHM___UpSkfhsDiLqlAmsIOKfoig6n_1zElEzPu5F4_Db9n0CPEiKM4I4DaQuK-6GYQ7matW-LMtaRsgsG98KqAOxkQXae8w9XSkEt23oYGR2sP9JmyQA04sbtqch8fUtLXgjN32-6FkpzkhhWqXD-hgVznJIY9BrKNrORtlouMiag'}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="col-span-6 mt-4">
        <img 
          alt="Product detail 1" 
          className="w-full h-[300px] object-cover rounded-2xl" 
          src={PRODUCTS[1]?.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM2RCEXJ-zIuIH18mhAPFxPG5vmyjNfI_1L6fsAdGJ1PqHNT9JN3DnKH9IUMXrS-FqjsdGxYJReR-8M7tkGi-EdUTBhCoMUdXHGVBpSDsrczBNWn7yzVlei4PEROUV_3XgdfaktDu22xpC5qcqRojVLe-DW_TzyRIdbscPb1hRwENZWht2g-0qDBycuCkU91gx_uy68V4O29wRD0Y1I1zmF4Jvn4fF0oW26XIwYvMYVpIWJXiFzrkUUWQsh543xkKp0hgga_db6Q'}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="col-span-6 -mt-12">
        <img 
          alt="Product detail 2" 
          className="w-full h-[350px] object-cover rounded-2xl" 
          src={PRODUCTS[2]?.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1mNKzdtwMqjIb1LPt91xRDeZShHoxT-beRVHj_h3IooyRyXbX11ULtXZBFy_ac7WrpokZC_MEK7K9FxJlzrCLEIJIHHT_cVPf-ql6Wsplk5v0hycw01n87lz71yrmvbKgvp0Ov6vatA5DdchgFop-ZGPJWcIeJLBmW6F6ZAjkyGcQ8_kHlhIr4T5_pfhfc_vTlyf8Tl_0jbtCUIhZOLfQf2dpLamZ63IJ4ZqKdq3wlx3jNDU_1bJ8FX44yeOnfcDy0qo3sV_b-A'}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
