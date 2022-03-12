import { useSelector } from "react-redux";
import Post from "./Post";
import Task4 from "./Task4";
import TestCarousel from "./testCarousel";

export default function Main() {
  let PostDetails = useSelector((state) => state.post);
  let total = useSelector((state) => state.total);

  return (
    <div>
      <div>
        <Task4 />

        <div className="container">
          <p>
            Total Like : <span>{total}</span>
          </p>
        </div>

        {PostDetails.map((e, index) => (
          <Post data={e} index={index} />
        ))}
      </div>
      {/* <div>
        <TestCarousel />
      </div> */}
    </div>
  );
}
