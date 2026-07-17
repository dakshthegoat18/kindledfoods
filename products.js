const productCatalog = [
  {
    name: 'Badam Drink',
    description: 'A creamy plant-based almond delight with a soft, comforting finish.',
    image: 'products/badamdrink/Badam_Drink_02.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/badam-drink'
  },
  {
    name: 'Black Rose Tea',
    description: 'An indulgent floral blend with rich aroma and delicate sweetness.',
    image: 'products/blackrosetea/Black_Rose_Tea.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/black-rose-tea'
  },
  {
    name: 'Black Rose Tea Reserve',
    description: 'A second expression of the signature floral tea profile for deeper ritual.',
    image: 'products/blackrosetea/black_rose_tea2.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/black-rose-tea-reserve'
  },
  {
    name: 'Chocolate Cake Premix',
    description: 'Premium cake premix made for effortless baking and rich cocoa depth.',
    image: 'products/chocolatecakepremix/chocolatecakepremix.webp',
    category: 'Baking',
    plantyumLink: 'https://plantyum.in/product/chocolate-cake-premix'
  },
  {
    name: 'Whole Wheat Chocolate Cake Premix',
    description: 'A wholesome take on indulgence with gentle texture and natural sweetness.',
    image: 'products/chocolatecakepremixwholewheat/ChocolateCakePremixWholeWheatJaggery.webp',
    category: 'Baking',
    plantyumLink: 'https://plantyum.in/product/whole-wheat-chocolate-cake-premix'
  },
  {
    name: 'Chocolate Shake',
    description: 'Velvety cocoa flavor designed for luxurious everyday sipping.',
    image: 'products/chocolateshake/Chocolate_Shake.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/chocolate-shake'
  },
  {
    name: 'Chocolate Shake Deluxe',
    description: 'A richer interpretive variant of the signature chocolate shake.',
    image: 'products/chocolateshake/Chocolate_Shake%20(2).webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/chocolate-shake-deluxe'
  },
  {
    name: 'Coconut Milk Powder',
    description: 'Versatile dairy-free coconut cream powder for everyday recipes.',
    image: 'products/coconutmilkpowder/PlantYumCoconutMilkPowder_2.webp',
    category: 'Powders',
    plantyumLink: 'https://plantyum.in/product/coconut-milk-powder'
  },
  {
    name: 'Coffee Premix Sachet',
    description: 'A mellow and aromatic instant coffee premix crafted for comfort.',
    image: 'products/coffeepremixsachet/coffeepremixsachet.webp',
    category: 'Coffee',
    plantyumLink: 'https://plantyum.in/product/coffee-premix-sachet'
  },
  {
    name: 'Creamer Trial Pack',
    description: 'A curated selection of creamers to explore flavor and texture.',
    image: 'products/creamertrailpack/creamer_trial_pack.webp',
    category: 'Creamers',
    plantyumLink: 'https://plantyum.in/product/creamer-trial-pack'
  },
  {
    name: 'Raksha Bandhan Gift Hamper',
    description: 'A festive hamper designed to celebrate connection and indulgence.',
    image: 'products/gifthamperraksha_bandhan/rakshabandhangifthamper.webp',
    category: 'Gift Sets',
    plantyumLink: 'https://plantyum.in/product/raksha-bandhan-gift-hamper'
  },
  {
    name: 'Red Gift Hamper',
    description: 'A premium gift presentation with an elegant palette and thoughtful selection.',
    image: 'products/gifthamperred/gifthamper-1-2026-04-09at4.07.58PM.webp',
    category: 'Gift Sets',
    plantyumLink: 'https://plantyum.in/product/red-gift-hamper'
  },
  {
    name: 'Sapoorna Gift Hamper',
    description: 'A celebratory hamper made for memorable gifting moments.',
    image: 'products/gifthampersapoorna/gifthamper-3-2026-02-02at5.52.58PM.webp',
    category: 'Gift Sets',
    plantyumLink: 'https://plantyum.in/product/sapoorna-gift-hamper'
  },
  {
    name: 'Gulab Jamun',
    description: 'A rich, nostalgic treat with luxurious sweetness and soft texture.',
    image: 'products/gulabjamun/gulab_jamun.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/gulab-jamun'
  },
  {
    name: 'Hot Chocolate',
    description: 'Coezy cocoa comfort designed for chilly evenings and slow moments.',
    image: 'products/hotchocolate/hotchocolate.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/hot-chocolate'
  },
  {
    name: 'Hot Chocolate Velvet',
    description: 'A richer cocoa profile for those who love deeper flavor.',
    image: 'products/hotchocolate/hotchocolate2.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/hot-chocolate-velvet'
  },
  {
    name: 'Chocolate Ice Cream',
    description: 'Silky, indulgent dessert with a sophisticated cocoa finish.',
    image: 'products/icecream/ChocolateIceCream.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/chocolate-ice-cream'
  },
  {
    name: 'Immunity Kadha',
    description: 'A warming wellness blend shaped for daily vitality and comfort.',
    image: 'products/immunitykadha/-imunitykadha.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/immunity-kadha'
  },
  {
    name: 'Instant Coffee',
    description: 'A polished instant coffee with bright aroma and smooth character.',
    image: 'products/instantcoffee/Instant_Coffee.webp',
    category: 'Coffee',
    plantyumLink: 'https://plantyum.in/product/instant-coffee'
  },
  {
    name: 'Lemon Tea',
    description: 'A crisp citrus infusion with glow and freshness in every sip.',
    image: 'products/lemontea/Lemontea.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/lemon-tea'
  },
  {
    name: 'Lemon Tea Citrus',
    description: 'A bright variation made for refreshment with an elevated finish.',
    image: 'products/lemontea/Lemon_2.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/lemon-tea-citrus'
  },
  {
    name: 'Mango Shake',
    description: 'A sunny, tropical blend that feels lush and celebratory.',
    image: 'products/mangoshake/mangoshake.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/mango-shake'
  },
  {
    name: 'Mango Shake Glow',
    description: 'A vibrant, fruit-forward variation of the signature mango shake.',
    image: 'products/mangoshake/mangoshake2.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/mango-shake-glow'
  },
  {
    name: 'MCT Powder',
    description: 'A convenient blend for active routines and sustained energy support.',
    image: 'products/mctpowder/mctpowder_1kg_1.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/mct-powder'
  },
  {
    name: 'Millet Tea Ginger',
    description: 'A grounding herbal tea with warm spice and mindful comfort.',
    image: 'products/milletteaginger/MilletTeaGinger1kg.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/millet-tea-ginger'
  },
  {
    name: 'Mnaago Powder',
    description: 'A nutritious blend created for everyday wellness and modern recipes.',
    image: 'products/mnaagopoeder/MNaagoPowder_9a50696a-bdc9-41e1-841b-590de0bcfe23.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/mnaago-powder'
  },
  {
    name: 'No Acidity Millet Tea Premix',
    description: 'A gentle tea premix designed for comfort without acidity.',
    image: 'products/noaciditymilletteapremix/noaciditymilletteapremix_e24cba57-b902-47b9-a6d2-42f2c51badb0.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/no-acidity-millet-tea-premix'
  },
  {
    name: 'Oat Matcha Latte',
    description: 'A refined matcha experience with calm and creamy oat notes.',
    image: 'products/oatmacha/Oat_Matcha_Latte.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/oat-matcha-latte'
  },
  {
    name: 'Oats Creamer',
    description: 'A smooth oat-based creamer made to enrich coffee and tea rituals.',
    image: 'products/oatscreamer/oatscreamer.webp',
    category: 'Creamers',
    plantyumLink: 'https://plantyum.in/product/oats-creamer'
  },
  {
    name: 'PlantYum No Added Sugar',
    description: 'A carefully balanced blend for those who want flavor without excess sweetness.',
    image: 'products/plantyumnoaddedsugar/Plant_Yum_No_Added_Sugar_6_1.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/no-added-sugar'
  },
  {
    name: 'Premium Gift Hamper',
    description: 'An elevated gifting experience with a polished presentation and curated selection.',
    image: 'products/premiumgifhamper/premiumgifthamper.webp',
    category: 'Gift Sets',
    plantyumLink: 'https://plantyum.in/product/premium-gift-hamper'
  },
  {
    name: 'Protein Isolate',
    description: 'A clean protein option tailored for active lifestyles and nutrition goals.',
    image: 'products/protienisolate/Proteinisolate.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/protein-isolate'
  },
  {
    name: 'Rice Creamer',
    description: 'A gentle rice-based creamer with soft texture and flexible use.',
    image: 'products/ricecreamer/ricecreamer.webp',
    category: 'Creamers',
    plantyumLink: 'https://plantyum.in/product/rice-creamer'
  },
  {
    name: 'Strawberry Shake',
    description: 'A bright and juicy blend designed for playful, everyday pleasure.',
    image: 'products/strawberryshake/StrawberryShake.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/strawberry-shake'
  },
  {
    name: 'Strawberry Shake Bloom',
    description: 'A fresher variation of the signature berry blend for a lighter finish.',
    image: 'products/strawberryshake/StrawberryShake2.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/strawberry-shake-bloom'
  },
  {
    name: 'Super Saver Pack',
    description: 'A practical bundle brought together for easy discovery and everyday use.',
    image: 'products/supersaverpack/supersaverpack_PlantYumMasalaTeaPremix.webp',
    category: 'Bundles',
    plantyumLink: 'https://plantyum.in/product/super-saver-pack'
  },
  {
    name: 'Thandai',
    description: 'A festive, spiced blend with rich character and seasonal warmth.',
    image: 'products/thandai/Thandai.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/thandai'
  },
  {
    name: 'Thandai Festive',
    description: 'A celebratory take on the classic thandai profile with deeper spice.',
    image: 'products/thandai/thandai2.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/thandai-festive'
  },
  {
    name: 'Turmeric Latte',
    description: 'A cozy, wellness-forward blend with bright spice and smooth finish.',
    image: 'products/turmericlatte/turmericlatte.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/turmeric-latte'
  },
  {
    name: 'Turmeric Latte Calm',
    description: 'A softer expression designed for calm evening rituals.',
    image: 'products/turmericlatte/turmericlatte2.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/turmeric-latte-calm'
  },
  {
    name: 'Vanilla Coffee',
    description: 'A mellow coffee profile finished with polished vanilla sweetness.',
    image: 'products/vanillacoffee/vanillacoffee.webp',
    category: 'Coffee',
    plantyumLink: 'https://plantyum.in/product/vanilla-coffee'
  },
  {
    name: 'Vanilla Cake Premix',
    description: 'A soft and fragrant cake base for simple home baking moments.',
    image: 'products/vannilacakepremix/vannilacakepremix.webp',
    category: 'Baking',
    plantyumLink: 'https://plantyum.in/product/vanilla-cake-premix'
  },
  {
    name: 'Whole Wheat Vanilla Cake Premix',
    description: 'A wholesome vanilla cake premix with a comforting, bakery-style finish.',
    image: 'products/vannilacakepremixwholewheat/vannilacakepremix_wholewheatandjaggery.webp',
    category: 'Baking',
    plantyumLink: 'https://plantyum.in/product/whole-wheat-vanilla-cake-premix'
  },
  {
    name: 'Vermicelli Payasam',
    description: 'A comforting dessert with rich heritage notes and refined sweetness.',
    image: 'products/vermicelli_payasam/vermicelli_payasamdrink.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/vermicelli-payasam'
  },
  {
    name: 'Vanilla Ice Cream',
    description: 'A smooth, classic dessert with a polished vanilla finish.',
    image: 'products/icecream/VanillaIceCream_913d19bc-5b32-4ea1-93b8-3e31775a5751.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/vanilla-ice-cream'
  },
  {
    name: 'Coffee Ice Cream',
    description: 'A rich and aromatic dessert crafted for coffee lovers.',
    image: 'products/icecream/Coffee_Ice_Cream.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/coffee-ice-cream'
  },
  {
    name: 'Kulfi Ice Cream',
    description: 'A nostalgic frozen treat with creamy depth and festive charm.',
    image: 'products/icecream/Kulfi_Ice_Cream.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/kulfi-ice-cream'
  },
  {
    name: 'Matcha Ice Cream',
    description: 'A refined and earthy dessert with vibrant green tea character.',
    image: 'products/icecream/Matcha_Ice_Cream.webp',
    category: 'Desserts',
    plantyumLink: 'https://plantyum.in/product/matcha-ice-cream'
  },
  {
    name: 'Coconut Milk Powder Creamy',
    description: 'A versatile pantry essential for modern vegan cooking and baking.',
    image: 'products/coconutmilkpowder/coconutmilkpowder.webp',
    category: 'Powders',
    plantyumLink: 'https://plantyum.in/product/coconut-milk-powder-creamy'
  },
  {
    name: 'PlantYum No Added Sugar Classic',
    description: 'A refined wellness staple for balanced recipes and everyday routines.',
    image: 'products/plantyumnoaddedsugar/PlantYumNoAddedSugar12_1.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/no-added-sugar-classic'
  },
  {
    name: 'Badam Drink Delight',
    description: 'A nostalgic almond beverage with wellness-led richness and softness.',
    image: 'products/badamdrink/badamdrink.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/badam-drink-delight'
  },
  {
    name: 'Rice Creamer Deluxe',
    description: 'An elevated rice-based creamer for daily coffee and tea rituals.',
    image: 'products/ricecreamer/PlantYumRiceCreamer_2.webp',
    category: 'Creamers',
    plantyumLink: 'https://plantyum.in/product/rice-creamer-deluxe'
  },
  {
    name: 'Oat Matcha Latte Supreme',
    description: 'A premium plant-based latte experience with premium matcha depth.',
    image: 'products/oatmacha/oatmacha2_39877421-2a66-4599-a657-e736b127bf25.webp',
    category: 'Beverages',
    plantyumLink: 'https://plantyum.in/product/oat-matcha-latte-supreme'
  },
  {
    name: 'Premium Gift Hamper Duo',
    description: 'A beautifully curated hamper assembled for meaningful celebration.',
    image: 'products/premiumgifhamper/premiumgifthamper.webp',
    category: 'Gift Sets',
    plantyumLink: 'https://plantyum.in/product/premium-gift-hamper-duo'
  },
  {
    name: 'Tea Premix Cardamom No Added Sugar',
    description: 'A fragrant tea premix with gentle sweetness and warming spice.',
    image: 'products/teapremiccardamomnoaddedsugar/TeaPremixCardamom-noaddedsugar-750gm5.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/tea-premix-cardamom-no-added-sugar'
  },
  {
    name: 'Tea Premix Sachet',
    description: 'A convenient tea premix crafted for a polished everyday brew.',
    image: 'products/teapremixsachet/teapremixsachet.webp',
    category: 'Tea',
    plantyumLink: 'https://plantyum.in/product/tea-premix-sachet'
  },
  {
    name: 'MCT Powder Active',
    description: 'A modern wellness powder designed for active routines and clean energy.',
    image: 'products/mctpowder/MCTPowder_e6876760-79fe-4596-88c7-da69d7eef1ba.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/mct-powder-active'
  },
  {
    name: 'Protein Isolate Essentials',
    description: 'A high-performance addition for those seeking thoughtful supplementation.',
    image: 'products/protienisolate/Proteinisolate.webp',
    category: 'Wellness',
    plantyumLink: 'https://plantyum.in/product/protein-isolate-essentials'
  },
  {
    name: 'Instant Coffee Reserve',
    description: 'A carefully crafted coffee expression with rich aroma and smooth finish.',
    image: 'products/instantcoffee/Instant_Coffee.webp',
    category: 'Coffee',
    plantyumLink: 'https://plantyum.in/product/instant-coffee-reserve'
  }
];

function createProductCard(product) {
  const card = document.createElement('a');
  card.className = 'product-card reveal';
  card.href = product.plantyumLink;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="product-body">
      <span class="product-category">${product.category}</span>
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <span class="view-product">View Product</span>
    </div>
  `;
  return card;
}

function renderProducts(selector, limit = null) {
  const container = document.querySelector(selector);
  if (!container) return;

  const items = limit ? productCatalog.slice(0, limit) : productCatalog;
  container.innerHTML = '';
  items.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}

window.productCatalog = productCatalog;
window.renderProducts = renderProducts;
