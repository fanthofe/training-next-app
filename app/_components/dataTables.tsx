"use client";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { prisma } from "@/lib/prisma"
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'matricule', headerName: 'Matricule', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { 
        field: 'attack', 
        headerName: 'Attack', 
        type: 'number', 
        width: 90 
    },
    { 
        field: 'defense', 
        headerName: 'Defense', 
        type: 'number', 
        width: 90 
    },
    { 
        field: 'life', 
        headerName: 'Life', 
        type: 'number', 
        width: 90 
    },
    { 
        field: 'level', 
        headerName: 'Level', 
        type: 'number', 
        width: 90 
    },
    { 
        field: 'experience', 
        headerName: 'Experience', 
        type: 'number', 
        width: 90 
    }
  ];

const characters = await prisma.character.findMany();

const paginationModel = { page: 0, pageSize: 5 };

export default async function DataTable() {

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={characters}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
        />
        </Paper>
    );
}