import NothingFound from "../UI/NothingFound";
import ProductCard from "../UI/ProductCard";
import SectionLoading from "../UI/SectionLoading";

const ResultsBox = (props) => {
  const showProducts = props.fetchedProducts.map((product) => {
    return (
      <ProductCard product={product} picturesLoading={props.picturesLoading} />
    );
  });

  return (
    <div className="w-auto my-10 bg-gray-200 flex justify-center content-center">
      <div className="bg-white w-11/12 md:w-10/12 m-6 p-6 rounded-lg shadow-lg flex flex-wrap justify-center">
        {props.isEmpty ? (
          <NothingFound />
        ) : props.contentLoading ? (
          <SectionLoading />
        ) : (
          showProducts
        )}
      </div>
    </div>
  );
};

export default ResultsBox;
