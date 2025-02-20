import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">汽車租賃管理系統</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <Card key={car.id} className="p-4">
            <CardContent>
              <h2 className="text-xl font-bold">{car.brand} {car.model}</h2>
              <p>年份: {car.year}</p>
              <p>車牌號碼: {car.licensePlate}</p>
              <Button className="mt-2">租賃</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
