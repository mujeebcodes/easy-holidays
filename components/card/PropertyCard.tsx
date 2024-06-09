import Image from "next/image";
import Link from "next/link";
import CountryFlagAndName from "./CountryFlagAndName";
import PropertyRating from "./PropertyRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { PropertyCardProps } from "@/utils/types";
import { formatCurrency } from "@/utils/format";

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
  const { id: propertyId, name, image, price, country, tagline } = property;
  console.log(country);

  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          <PropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">{formatCurrency(price)} </span>
            /night
          </p>
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-10">
        <FavoriteToggleButton propertyId={propertyId} />
      </div>
    </article>
  );
};
export default PropertyCard;