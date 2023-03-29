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
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher.id}>
              <td>{voucher.Title}</td>
              <td>{voucher.Description}</td>
              <td>{voucher.Discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Voucher;
