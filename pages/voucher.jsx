import styles from "../styles/Voucher.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Voucher = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sheetdb.io/api/v1/rvd5xqes70tr0"
      );
      setVouchers(response.data);
    };
    fetchData();
  }, []);

  const addVoucher = async (voucher) => {
    const response = await axios.post(
      "https://sheetdb.io/api/v1/rvd5xqes70tr0",
      { data: voucher }
    );
    setVouchers((prevVouchers) => [...prevVouchers, response.data]);
  };

  const deleteVoucher = async (id) => {
    const response = await axios.delete(
      `https://sheetdb.io/api/v1/rvd5xqes70tr0/id/${id}`
    );
    setVouchers((prevVouchers) =>
      prevVouchers.filter((voucher) => voucher.id !== id)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Discount</th>
            </tr>
            {vouchers.map((voucher) => (
              <tr key={voucher.id}>
                <td className={styles.data}>{voucher.Title}</td>
                <td className={styles.data}>{voucher.Description}</td>
                <td className={styles.data}>{voucher.Discount}</td>
                <td>
                  <button onClick={() => deleteVoucher(voucher.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.label}>Add Voucher:</h2>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            addVoucher({
              Title: event.target.title.value,
              Description: event.target.description.value,
              Discount: event.target.discount.value,
            });
          }}
        >
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            className={styles.input}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className={styles.input}
            type="text"
            name="discount"
            placeholder="Discount"
          />
          <button className={styles.btn} type="submit">
            Add Voucher
          </button>
        </form>
      </div>
    </div>
  );
};

export default Voucher;
