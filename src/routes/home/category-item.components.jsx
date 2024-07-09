

import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import './homepage.styles.scss'
   
const CategoryItem = ({ title, desc, imgUrl }) => {
    return (
      <Card className="cat-item">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={imgUrl}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 items-center justify-between">
            <Typography color="blue-gray" className="font-semibold text-center">
              {title}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-center"
          >
            {desc}
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Get Same
          </Button>
        </CardFooter> */}
      </Card>
    );
}

export default CategoryItem