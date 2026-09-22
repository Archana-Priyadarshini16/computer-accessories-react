import React from "react";
import Product from "./Product";
import "./ProductTab.css";

const ProductTab = () => {
  const productsList = [
    {
      title: "Apple AirPods Pro 2",
      image:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXBwbGUlMjBBaXJQb2RzJTIwUHJvJTIwMnxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: 24900,
      newPrice: 19999,
      description:
        "Wireless earbuds with active noise cancellation, adaptive audio, spatial audio, and a MagSafe charging case.",
    },

    {
      title: "Logitech K380 Keyboard",
      image:
        "https://images.unsplash.com/photo-1585314614250-d213876625e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9naXRlY2glMjBLMzgwJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      oldPrice: 3495,
      newPrice: 2799,
      description:
        "Compact Bluetooth keyboard with a slim design and multi-device connectivity, ideal for laptops, tablets, and phones.",
    },

    {
      title: "WD My Passport HDD",
      image:
        "https://images.unsplash.com/photo-1699376272555-22c747639901?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdEJTIwTXklMjBQYXNzcG9ydCUyMEhERHxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: 7999,
      newPrice: 5999,
      description:
        "Portable external hard drive designed for storing photos, videos, documents, and backups while on the go.",
    },

    {
      title: "TP-Link Archer T3U",
      image:
        "https://images.unsplash.com/photo-1750712263185-edde9f359e33?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VFAtTGluayUyMEFyY2hlciUyMFQzVXxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: 1999,
      newPrice: 1299,
      description:
        "Compact USB Wi-Fi adapter that provides dual-band wireless connectivity for compatible desktop and laptop computers.",
    },

    {
      title: "Logitech C920 Webcam",
      image:
        "https://images.unsplash.com/photo-1626581806599-d12b0bbd4225?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9naXRlY2glMjBDOTIwJTIwV2ViY2FtfGVufDB8fDB8fHww",
      oldPrice: 9995,
      newPrice: 6999,
      description:
        "Full HD webcam with 1080p video, stereo microphones, and autofocus for online meetings, classes, streaming, and video calls.",
    },

    {
      title: "JBL Quantum 100",
      image:
        "https://images.unsplash.com/photo-1715645970186-7a9d6d816b49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEpCTCUyMFF1YW50dW0lMjAxMDB8ZW58MHx8MHx8fDA%3D",
      oldPrice: 2999,
      newPrice: 1999,
      description:
        "Wired gaming headset with JBL QuantumSOUND, detachable boom microphone, and lightweight comfort for long gaming sessions.",
    },

    {
      title: "Keychron K2 Keyboard",
      image:
        "https://images.unsplash.com/photo-1637243218672-d338945efdf7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2V5Y2hyb24lMjBLMiUyMEtleWJvYXJkfGVufDB8fDB8fHww",
      oldPrice: 8999,
      newPrice: 6999,
      description:
        "Compact wireless mechanical keyboard with a 75% layout, Bluetooth connectivity, and mechanical switches for responsive typing.",
    },

    {
      title: "UGREEN USB-C Hub",
      image:
        "https://media.istockphoto.com/id/1198426232/photo/mans-hand-holding-the-usb-adapter-under-the-type-c-connector-for-laptop-multiport-station-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=a0XNrPDfSz_67NgGDN8R-cRZsVLMCqdnxf6aLk5pb2I=",
      oldPrice: 2999,
      newPrice: 1999,
      description:
        "Compact USB-C hub that adds multiple connectivity options for compatible laptops, including USB and other expansion ports.",
    },

    {
      title: "ASUS ROG Mouse",
      image:
        "https://images.pexels.com/photos/18295023/pexels-photo-18295023.jpeg",
      oldPrice: 4999,
      newPrice: 3499,
      description:
        "Gaming mouse designed for precise control with a high-performance sensor, programmable controls, and an ergonomic design.",
    },

    {
      title: "Anker PowerConf C200",
      image:
        "https://images.pexels.com/photos/31726723/pexels-photo-31726723.jpeg",
      oldPrice: 7999,
      newPrice: 5999,
      description:
        "2K webcam with autofocus, built-in microphones, adjustable field of view, and low-light enhancement for video meetings and streaming.",
    },
    {
      title: "Logitech G305 Mouse",
      image:
        "https://images.unsplash.com/photo-1618499893452-942141785a2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExvZ2l0ZWNoJTIwRzMwNSUyME1vdXNlfGVufDB8fDB8fHww",
      oldPrice: 3995,
      newPrice: 2628,
      description:
        "Wireless gaming mouse with a HERO sensor, six programmable buttons, fast LIGHTSPEED connectivity, and a lightweight design.",
    },

    {
      title: "Razer BlackShark V2 X",
      image:
        "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJhemVyJTIwQmxhY2tTaGFyayUyMFYyJTIwWHxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: 4999,
      newPrice: 3899,
      description:
        "Gaming headset with 50 mm drivers, 7.1 surround sound support, noise isolation, and a flexible microphone.",
    },

    {
      title: "SanDisk Dual Drive Go",
      image:
        "https://images.pexels.com/photos/4633278/pexels-photo-4633278.jpeg",
      oldPrice: 2499,
      newPrice: 2099,
      description:
        "Portable USB drive with USB-C and USB-A connectors for convenient file transfers between computers and compatible mobile devices.",
    },

    {
      title: "Seagate Expansion HDD",
      image:
        "https://images.pexels.com/photos/35147264/pexels-photo-35147264.jpeg",
      oldPrice: 9999,
      newPrice: 7499,
      description:
        "Portable external hard drive designed for storing photos, videos, documents, backups, and other large files.",
    },

    {
      title: "Razer DeathAdder V2 X",
      image:
        "https://images.pexels.com/photos/16311111/pexels-photo-16311111.jpeg",
      oldPrice: 4999,
      newPrice: 2499,
      description:
        "Ergonomic wireless gaming mouse with precise optical tracking, programmable buttons, and dual wireless connectivity.",
    },

    {
      title: "HyperX Pulsefire Haste 2",
      image:
        "https://images.pexels.com/photos/18295023/pexels-photo-18295023.jpeg",
      oldPrice: 5999,
      newPrice: 2999,
      description:
        "Lightweight gaming mouse with a high-precision sensor, wireless connectivity, and a comfortable symmetrical design.",
    },

    {
      title: "HyperX Cloud Jet",
      image:
        "https://images.pexels.com/photos/12304813/pexels-photo-12304813.jpeg",
      oldPrice: 6999,
      newPrice: 5127,
      description:
        "Wireless gaming headset with comfortable earcups, an integrated microphone, and convenient wireless audio connectivity.",
    },

    {
      title: "CORSAIR EX100U SSD",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENPUlNBSVIlMjBFWDEwMFUlMjBTU0R8ZW58MHx8MHx8fDA%3D",
      oldPrice: 24999,
      newPrice: 22899,
      description:
        "Compact portable SSD offering fast file transfers and large storage capacity for backups, media, and everyday files.",
    },

    {
      title: "Razer USB-C Dock",
      image:
        "https://images.unsplash.com/photo-1659696525420-3f6a6f5c636e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmF6ZXIlMjBVU0ItQyUyMERvY2t8ZW58MHx8MHx8fDA%3D",
      oldPrice: 14999,
      newPrice: 12250,
      description:
        "Multi-port USB-C dock that expands laptop connectivity for displays, storage devices, peripherals, and other accessories.",
    },

    {
      title: "HP 240 Mouse",
      image:
        "https://images.unsplash.com/photo-1639120346883-897e8ea1d4f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SFAlMjAyNDAlMjBNb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: 1299,
      newPrice: 899,
      description:
        "Compact Bluetooth mouse designed for everyday laptop and desktop use with comfortable handling and wireless connectivity.",
    },
  ];
  return (
    <div>
      <div className="head">
        <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>
      </div>
      <div className="ProductTab">
        {productsList.map((ele, idx) => (
          <Product
            key={idx}
            title={ele.title}
            image={ele.image}
            oldPrice={ele.oldPrice}
            newPrice={ele.newPrice}
            description={ele.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTab;
