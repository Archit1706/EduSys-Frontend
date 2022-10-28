import CardPending from "components/Cards/CardPendingReq";
import { TeacherContext } from "context/TeacherContext";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";

// components

export default function TeacherDashboard() {
  const history = useHistory();

  const { pendingData, completedData, fetchTeacherSubjects } =
    React.useContext(TeacherContext);
  useEffect(async () => {
    await fetchTeacherSubjects();
  }, []);
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-full px-4">
          <CardPending
            title="Assigned Subjects"
            data={pendingData}
            onAddClick={() => history.push("/teacher/assign")}
          />
          <CardPending title="Completed Subjects" data={completedData} />
        </div>
      </div>
      {/* <Modal isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <button onClick={openModal}>Open</button>
      </Modal> */}
    </>
  );
}
