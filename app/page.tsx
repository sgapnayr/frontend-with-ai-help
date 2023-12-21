"use client";

import Image from "next/image";
import { useState } from "react";
import Employee1 from "../assets/images/employee-1.png";
import Employee2 from "../assets/images/employee-2.png";
import Employee3 from "../assets/images/employee-3.png";

export default function Home() {
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const employees = [
    {
      employeeId: "1",
      employeeImage: Employee1,
      employeeName: "Ryan Pags",
      employeeRole: "SWE",
      employeeLocation: "TX",
      employeeEmail: "pags@123.com",
    },
    {
      employeeId: "2",
      employeeImage: Employee2,
      employeeName: "Samantha Lee",
      employeeRole: "Product Manager",
      employeeLocation: "NY",
      employeeEmail: "slee@123.com",
    },
    {
      employeeId: "3",
      employeeImage: Employee3,
      employeeName: "Dev Patel",
      employeeRole: "UX Designer",
      employeeLocation: "CA",
      employeeEmail: "dpatel@123.com",
    },
  ];

  return (
    <div className="bg-[#161616] min-h-screen">
      {selectedEmployee && (
        <div className="my-8 p-4 grid grid-cols-3 items-center border-b mx-4 bg-gray-800 shadow-lg">
          <div className="flex items-center">
            <Image
              src={selectedEmployee.employeeImage}
              alt={selectedEmployee.employeeName}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col item-center mx-4">
              <div className="text-xl font-bold">
                {selectedEmployee.employeeName}
              </div>
              <div className="opacity-50">{selectedEmployee.employeeRole}</div>
            </div>
          </div>
          <div className="text-xl font-bold">
            {selectedEmployee.employeeLocation}
          </div>
          <div className="text-xl font-bold">
            {selectedEmployee.employeeEmail}
          </div>
        </div>
      )}

      {employees.map((employee) => {
        return (
          <div
            className="p-4 grid grid-cols-3 items-center transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg"
            key={employee.employeeId}
            onClick={() => setSelectedEmployee(employee)}
          >
            <div className="flex items-center">
              <Image
                src={employee.employeeImage}
                alt={employee.employeeName}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="flex flex-col item-center mx-4">
                <div className="text-xl font-bold">{employee.employeeName}</div>
                <div className="opacity-50">{employee.employeeRole}</div>
              </div>
            </div>
            <div className="text-xl font-bold">{employee.employeeLocation}</div>
            <div className="text-xl font-bold">{employee.employeeEmail}</div>
          </div>
        );
      })}
    </div>
  );
}
