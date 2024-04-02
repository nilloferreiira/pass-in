import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/Table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 py-1.5 border border-white/10 rounded-lg">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm"
          />
        </div>
      </div>

      {/* TABLE  */}
      <Table>
        <thead>
          <TableRow className="border-b border-white/10">
            <TableHeader
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Código
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Participantes
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Data de inscrição
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Data do check-in
            </TableHeader>

            <TableHeader
              style={{ width: 64 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            ></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <TableRow key={i} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10"
                  />
                </TableCell>
                <TableCell>123546</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Danillo Ferreira
                    </span>
                    <span>danillo.ferreira@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell>
                  7 dias atrás
                </TableCell>
                <TableCell>
                  7 dias atrás
                </TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando 10 de 220 items
            </TableCell>
            <TableCell 
              colSpan={3}
              className="text-right"
            >
              <div className="inline-flex gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell >
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
}
