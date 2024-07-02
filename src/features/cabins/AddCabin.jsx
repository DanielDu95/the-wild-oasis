import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabins</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Open table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;

// <div>
//   <Button onClick={() => setIsOpenModal((show) => !show)}>
//     Add new cabin
//   </Button>
//   {isOpenModal && (
//     <Modal onClose={() => setIsOpenModal(false)}>
//       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//     </Modal>
//   )}
// </div>
