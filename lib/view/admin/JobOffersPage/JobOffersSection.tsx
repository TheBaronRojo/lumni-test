import { useMemo, useState } from "react";
import Table from "@view/common/Table";
import IJobOfferRow from "./IJobOfferRow";
import { ITableCellIndex, ITableColumn } from "@view/common/Table/Table";
import jobOfferToRow from "./jobOfferToRow";
import styles from "./JobOffersSection.module.css";
import AnimatedPanel from "@view/common/AnimatedPanel";
import JobOfferDetail from "./JobOfferDetail/JobOfferDetail";
import useFetchJobOffers from "../Api/useFetchJobOffers";
import IJobOfferDto from "@application/models/IJobOfferDto";

const JobOffersSection = () => {
  const { jobOffers, loadingJobOffers } = useFetchJobOffers({});
  const [selectedCell, setSelectedCell] = useState<undefined | ITableCellIndex<IJobOfferRow>>();
  const [selectedJobOffer, setSelectedJobOffer] = useState<undefined | IJobOfferDto>();
  const [openLeftPanel, setOpenLeftPanel] = useState(false);


  const [columns, setColumns] = useState<ITableColumn<IJobOfferRow>[]>([
    { Header: "", accessor: "statusColor", width: 18, cellWidth: 18, resizeDisabled: true },
    { Header: "Estado", accessor: "status", width: 100, cellWidth: 100 },
    { Header: "Registro", accessor: "creationTime", width: 94, cellWidth: 94 },
    { Header: "Empresa", accessor: "company", width: 200, cellWidth: 200 },
    { Header: "Cargo", accessor: "jobRole", width: 200, cellWidth: 200 },
    { Header: "Ciudad / Depto / País", accessor: "location", width: 200, cellWidth: 200 },
    { Header: "Área de conocimiento", accessor: "knowledgeArea", width: 200, cellWidth: 200 },
    { Header: "Rango salarial", accessor: "salaryRange", width: 216, cellWidth: 216 },
    { Header: "Vencimiento", accessor: "expirationTime", width: 100, cellWidth: 100 },
  ]);

  const values = useMemo(() => jobOffers
    ?.sort((a, b) => {
      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);
      if (aCreatedAt > bCreatedAt) return -1;
      if (aCreatedAt < bCreatedAt) return 1;
      return 0;
    })
    .map(x => jobOfferToRow(x)) ?? [],
    [jobOffers]
  );

  const onCellClick = (cellIndex: ITableCellIndex<IJobOfferRow>) => {
    setSelectedCell(selectedCell);
    setSelectedJobOffer(jobOffers?.find(x => x.id === cellIndex.rowId));
    setOpenLeftPanel(true);
  };

  return (
    <section className={styles.root}>
      <header>
        <h1>Ofertas laborales</h1>
      </header>
      <main>
        <Table
          loading={loadingJobOffers}
          className={styles.table}
          columns={columns}
          values={values}
          onCellClick={onCellClick}
          selectedCell={selectedCell}
          onColumnsChange={setColumns}
        />
      </main>

      <AnimatedPanel open={openLeftPanel} onClose={() => setOpenLeftPanel(false)}>
        {selectedJobOffer != null
          ? (
            <div style={{ padding: "1rem 1rem" }} >
              <h1 style={{ color: "var(--color-primary)", textAlign: "center" }}>
                Oferta laboral
              </h1>
              <JobOfferDetail jobOffer={selectedJobOffer} />
            </div>
          ) : (
            <></>
          )}
      </AnimatedPanel>
    </section>
  )
}

export default JobOffersSection;
