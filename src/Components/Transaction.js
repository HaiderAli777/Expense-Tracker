import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Transaction = () => {
  const [search, setSearch] = useState("");
  const [arr, setarr] = useState([]);
  const [check, setcheck] = useState(false);
  const data = useSelector((state) => {
    return state.track.data;
  });
  let content;
  let content1;
  let at;

  content = data.map((obj) => {
    return (
      <div key={Math.random()} className=" border  m-1 border-dark">
        <div className="">
          <div className="d-flex justify-content-between  p-2">
            <div>
              <h6>{obj.product}</h6>
            </div>
            <div>
              <h6>${obj.amount}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    if (search.length > 0) {
      setcheck(true);
      content1 = data.filter((obj) => {
        return obj.product.toLowerCase().includes(search.toLowerCase());
      });
      console.log("yr", content1);
      setarr(content1);
    } else {
      setcheck(false);
    }
  }, [search]);

  return (
    <div className="py-3">
      <h3 className="text-center">Transaction</h3>
      <div className="mx-5 my-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Search Product"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
      </div>
      {check ? (
        <div className="row  card w-100 px-5 mx-auto py-4">
          {arr.map((obj) => {
            return (
              <div key={Math.random()} className=" border  m-1 border-dark">
                <div className="card">
                  <div className="d-flex justify-content-between  p-2">
                    <div>
                      <h6>{obj.product}</h6>
                    </div>
                    <div>
                      <h6>{obj.amount}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row  card w-100 px-5 mx-auto py-4">
          {data.length == 0 && (
            <h3 className="text-center">There Is No Product</h3>
          )}
          {content}
        </div>
      )}
    </div>
  );
};
export default Transaction;
