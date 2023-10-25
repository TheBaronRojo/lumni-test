import { useState } from "react";
import styles from "./SearchStudentsSection.module.css";

import IPersonDto from "@application/models/IPersonDto";
import AnimatedPanel from "@view/common/AnimatedPanel";
import EmploymentInfoDetail from "@view/admin/InfoDetails/EmploymentInfoDetail";


const SearchStudentsSection = () => {

  const [selectedPerson, setSelectedPerson] = useState<undefined | IPersonDto>();
  const [openLeftPanel, setOpenLeftPanel] = useState(false);

  const onSubmit = () => {};

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>Buscar estudiantes por perfil de empleabilidad: </h1>
        <div className={styles.headersButtons}>

        </div>
      </header>
      <form className={styles.searchBox} onSubmit={onSubmit}>
         {/*
            
          Implemente aquí formulario de búsqueda
           
        */}
      </form>
      <main>
        {/*
            
          Implemente aquí la tabla de resultados   
           
        */}
        <div role="dummy-table" className={styles.table}>

        </div>
      </main>
      <AnimatedPanel open={openLeftPanel} onClose={() => { setOpenLeftPanel(false); }}>
        {selectedPerson
          ? (
            <div style={{ padding: "1rem 1rem" }} >
              <h1 style={{ color: "var(--color-primary)", textAlign: "center" }}>
                Perfil de empleabilidad
              </h1>
              {selectedPerson?.employmentInfo != null &&
                <EmploymentInfoDetail employmentInfo={selectedPerson.employmentInfo} />
              }
            </div>
          ) : (
            <></>
          )}
      </AnimatedPanel>
    </div>
  );
};

export default SearchStudentsSection;
