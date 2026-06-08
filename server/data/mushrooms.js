const mushrooms = [
  {
    scientific_name: ["Morchella angusticeps"], 
    common_name: ["black morel"],
    img_url: "https://static.inaturalist.org/photos/119761552/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Amanita rubescens"], 
    common_name: ["blusher"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/161000598/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Boletus aereus"], 
    common_name: ["bronze bolete"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/334808481/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Scleroderma citrinum"], 
    common_name: ["common earthball", "pigskin poison puffball"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/330609625/large.jpeg",
    edibility: "Toxic",
    color_code: "red"
  },
  {
    scientific_name: ["Amanita caesarea"], 
    common_name: ["Caesar's mushroom"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/7018635/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Ramaria flava"], 
    common_name: ["changle"],
    img_url: "https://static.inaturalist.org/photos/35300556/large.jpeg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["several species of agaricomycetous fungi in the genera Cantharellus, Craterellus, Gomphus, and Polyozellus"], 
    common_name: ["chanterelle"],
    img_url: "https://static.inaturalist.org/photos/334899892/large.jpeg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Amanita phalloides"], 
    common_name: ["death cap"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/111266235/large.jpg",
    edibility: "Highly toxic. Lethal at small doses.",
    color_code: "black"
  },
  {
    scientific_name: ["Pluteus cervinus"], 
    common_name: ["deer shield", "deer mushroom", "fawn mushroom"],
    img_url: "https://static.inaturalist.org/photos/116658302/large.jpeg",
    edibility: "Edible, but considered poor quality",
    color_code: "brown"
  },
  {
    scientific_name: ["Hygrophoropsis aurantiaca"], 
    common_name: ["false chanterelle"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/237942491/large.jpeg",
    edibility: "Variable. Said to be edible but reports of hallucinations recorded.",
    color_code: ""
  },
  {
    scientific_name: ["Amanita citrina"], 
    common_name: ["false death cap"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/331660393/large.jpg",
    edibility: "Edible, but not nearly tasty enough to warrant the worry of mistaking it for its notorious cousin.",
    color_code: ""
  },
  {
    scientific_name: ["Fomes fomentarius"], 
    common_name: ["false tinder fungus", "horse hoof fungus", "hoof fungus", "tinder conk", "tinder polypore", "ice man fungus"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/101598344/large.jpg",
    edibility: "Non-toxic, but it is far too tough for consumption and is primarily used for tinder.",
    color_code: "brown"
  },
  {
    scientific_name: ["Amanita muscaria"], 
    common_name: ["fly agaric", "fly amanita"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/111494893/large.jpg",
    edibility: "Edible, but requires processing to render safe to eat. Toxic and hallucinatory when raw.",
    color_code: "green"
  },
  {
    scientific_name: ["Clavariadelphus pistillaris"], 
    common_name: ["giant club fungus"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/103218479/large.jpg",
    edibility: "Edible, but considered poor quality",
    color_code: "brown"
  },
  {
    scientific_name: ["Genus Armillaria"], 
    common_name: ["honey fungus"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/9994/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Craterellus cornucopioides"], 
    common_name: ["horn of plenty", "black chanterelle", "black trumpet"],
    img_url: "https://static.inaturalist.org/photos/13660279/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Agaricus arvensis"], 
    common_name: ["horse mushroom"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/457252694/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Entoloma sinuatum", "Entoloma lividum", "Rhodophyllus sinuatus"], 
    common_name: ["livid entoloma", "livid agaric", "livid pinkgill", "leaden entoloma", "lead poisoner"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/111692094/large.jpg",
    edibility: "Toxic",
    color_code: "red"
  },
  {
    scientific_name: ["Panus conchatus"], 
    common_name: ["lilac oysterling"],
    img_url: "https://static.inaturalist.org/photos/171928596/large.jpg",
    edibility: "Technically edible, but not recommended because the flesh is tough and leathery.",
    color_code: "brown"
  },
  {
    scientific_name: ["Amanita pantherina"], 
    common_name: ["panther cap", "false blusher", "panther amanita"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/112768591/large.jpg",
    edibility: "Highly toxic",
    color_code: "red"
  },
  {
    scientific_name: ["Pleurotus ostreatus"], 
    common_name: ["pearl oyster mushroom"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/88810903/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Boletus edulis"], 
    common_name: ["porcino", "penny bun", "king bolete"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/194233976/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Tricholomopsis rutilans"], 
    common_name: ["plums and custard"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/29980732/large.jpg",
    edibility: "Edible, but poor quality",
    color_code: "brown"
  },
  {
    scientific_name: ["Rubroboletus pulcherrimus"], 
    common_name: ["red-pored bolete", "Satan's bolete"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/4160981/large.",
    edibility: "Toxic, potentially lethal",
    color_code: "black"
  },
  {
    scientific_name: ["Coprinus comatus"], 
    common_name: ["shaggy inkcap", "shaggy mane", "lawyer's wig"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/93399523/large.jpeg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Kuehneromyces mutabilis"], 
    common_name: ["sheathed woodtuft"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/332957294/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Entoloma clypeatum"], 
    common_name: ["shield pinkgill"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/169141152/large.jpg",
    edibility: "Questionable. Variable reports.",
    color_code: ""
  },
  {
    scientific_name: ["Calocybe gambosa"], 
    common_name: ["St. George's mushroom"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/189423888/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Tuber aestivum"], 
    common_name: ["summer truffle"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/622397256/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Russula emetica"], 
    common_name: ["the sickener", "vomiting russula", "emetic russula"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/109349419/large.jpg",
    edibility: "Toxic",
    color_code: "red"
  },
  {
    scientific_name: ["Morchella deliciosa"], 
    common_name: ["white morel"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/467843701/original.jpeg",
    edibility: "Edible, but must be cooked before consuming.",
    color_code: "green"
  },
  {
    scientific_name: ["Helvella crispa"], 
    common_name: ["elfin saddle", "white saddle", "common helvel"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/9863174/large.jpg",
    edibility: "Edible, but considered poor quality. Toxic if raw.",
    color_code: "brown"
  },
  {
    scientific_name: ["Amanita ocreata"], 
    common_name: ["Western destroying angel"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/4160199/large.",
    edibility: "Highly toxic. Often lethal.",
    color_code: "black"
  },
  {
    scientific_name: ["Tuber melanosporum"], 
    common_name: ["winter truffle"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/112065136/original.jpeg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Russula virescens"], 
    common_name: ["green cracking russula", "quilted green russula", "green brittlegill"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/9476621/large.jpg",
    edibility: "Edible",
    color_code: "green"
  },
  {
    scientific_name: ["Russula heterophylla"], 
    common_name: ["greasy green brittlegill"],
    img_url: "https://inaturalist-open-data.s3.amazonaws.com/photos/4001006/large.jpg",
    edibility: "Edible",
    color_code: "green"
  }
]

    // {
    //   scientific_name: [""], 
    //   common_name: ["none"],
    //   img_url: "",
    //   edibility: "",
    //   color_code: ""
    // }
  
export default mushrooms;