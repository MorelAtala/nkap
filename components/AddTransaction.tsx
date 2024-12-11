'use client';
import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added');
      formRef.current?.reset();
    }
  };

  return (
    <div className="add-transaction-container">
      <h3 className="add-transaction-title">Nouvelle Transaction</h3>
      <form ref={formRef} action={clientAction} className="add-transaction-form">
        <div className="form-control">
          <label htmlFor="text" className="form-label">Description</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Entre la description de ta transaction..."
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="form-label">
            Montant <br />
            <span className="form-helper">(négatif - dépense, positif - entrée)</span>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Entre le Montant..."
            step="0.01"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn">Ajoute une Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
