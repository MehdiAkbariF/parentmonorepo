import React from 'react';
import { Card } from '../../atoms/Card/Card';
import { Avatar } from '../../atoms/Avatar';
import { Label } from '../../atoms/Label';
import { Badge, BadgeVariant } from '../../atoms/Badge/Badge';
import { KeyValueDisplay } from '../../atoms/KeyValueDisplay/KeyValueDisplay';

export interface ShopDetailsItem {
  title: string;
  value: string;
}

export interface ShopDetailsCardProps {
  shopLogo?: string | null;
  shopTitle: string;
  shopStatus: string;
  shopStatusVariant?: BadgeVariant;
  items: ShopDetailsItem[];
}

/**
 * ShopDetailsCard یک کامپوننت برای نمایش اطلاعات خلاصه یک فروشگاه در یک کارت است.
 */
export const ShopDetailsCard: React.FC<ShopDetailsCardProps> = ({
  shopLogo,
  shopTitle,
  shopStatus,
  shopStatusVariant = 'neutral',
  items,
}) => {
  return (
    <Card className="shop-details-card">
      <header className="shop-details-card__header">
        <Avatar 
          src={shopLogo ? `https://api.yadakchi.com${shopLogo}` : undefined} 
          fallback={shopTitle.charAt(0)}
          size="lg"
        />
        <div className="shop-details-card__title-group">
          <Label as="h2" text={shopTitle} size="xl" />
          <Badge label={shopStatus} variant={shopStatusVariant} />
        </div>
      </header>
      <div className="shop-details-card__body">
        {items.map((item, index) => (
          <KeyValueDisplay key={index} label={item.title}>
            {item.value}
          </KeyValueDisplay>
        ))}
      </div>
    </Card>
  );
};