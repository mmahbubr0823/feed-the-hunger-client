import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { useMemo } from 'react';
const ManagedFoodCard = ({managedFood, managedFoods}) => {
    console.log(managedFood, managedFoods);
    const {_id, FoodImage, FoodName, FoodQuantity, PickupLocation, DonatorInfo, ExpiredDate, AdditionalNotes} = managedFood;

    const data = useMemo(()=>managedFoods, []);
    const columns = [
        {
            header:'Id', 
            accessorKey: _id
        },
        {
            header:'Id', 
            accessorKey: _id
        },
        {
            header:'Id', 
            accessorKey: _id
        },
        {
            header:'Id', 
            accessorKey: _id
        },
    ]
    const table = useReactTable(data, columns)
    return (
        <div>
            {/* <table>
                {
                    table.getHeaderGroups().map(headerGroup=>(<tr key={headerGroup._id}>
                        {headerGroup.headers.map(header=><th key={header._id}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>)}
                    </tr>))
                }
            </table> */}
        </div>
    );
};

export default ManagedFoodCard;