import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function Pagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    currentPage,
    changePage,
  };
}
