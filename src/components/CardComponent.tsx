import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface CardComponentProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <Card className='py-4 transition-transform transform hover:scale-105 hover:shadow-lg'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <h4 className='font-bold text-large'>{title}</h4>
        <p className='text-tiny uppercase font-bold'>{subtitle}</p>
        <small className='text-default-500'>{description}</small>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={imageUrl}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default CardComponent;
