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
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { ChangeEvent, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10)

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToNextPage() {
    setPage((state) => state + 1);
  }

  function goToPrevPage() {
    setPage((state) => state - 1);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 py-1.5 border border-white/10 rounded-lg">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            onChange={handleSearchChange}
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm "
          />
        </div>
        {search}
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
                className="size-4 bg-black/20 rounded border border-white/10 text-orange-400 ring-orange-300"
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 text-orange-400"
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedIn)}</TableCell>
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
              Mostrando 10 de {attendees.length} items
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton
                    onClick={goToFirstPage}
                    disabled={page === 1}
                  >
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToPrevPage}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
}
