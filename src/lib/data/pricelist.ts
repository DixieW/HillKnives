export const PriceTableTitle = "Alle messen worden door ons gepolijst als extra service"

export type PriceItem = {
    label: string;
    price?: string;
    unit?: string;
};

export type PriceCategory = {
    title: string;
    items: PriceItem[];
};

export const PRICE_LIST: PriceCategory[] = [
  {
    title: "Keuken - koksmessen slijpen",
    items: [
      { label: "Lemmet lengte 10 cm", price: "€ 5,00", unit: "per stuk" },
      { label: "Lemmet lengte 15 cm", price: "€ 7,50", unit: "per stuk" },
      { label: "Lemmet lengte 20 cm", price: "€ 10,00", unit: "per stuk" },
      { label: "Lemmet lengte 25 cm", price: "€ 12,50", unit: "per stuk" },
      { label: "Lemmet lengte 30 cm", price: "€ 15,00", unit: "per stuk" }
    ]
  },
  {
    title: "Broodmessen – Kartels slijpen",
    items: [
      { label: "Broodmes", price: "€ 10,00", unit: "per stuk" }
    ]
  },
  {
    title: "Tafelmessen",
    items: [
      { label: "Kartels slijpen", price: "€ 2,50", unit: "per stuk" },
      { label: "Nieuwe kartels erin zetten en scherp slijpen", price: "€ 3,00", unit: "per stuk" }
    ]
  },
  {
    title: "Scharen",
    items: [
      { label: "Huishoudschaar", price: "€ 7,50", unit: "per stuk" },
      { label: "Stoffenschaar", price: "€ 15,00", unit: "per stuk" }
    ]
  }
];