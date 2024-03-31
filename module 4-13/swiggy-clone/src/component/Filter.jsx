const Filter = (props) => {
  const { resData } = props;
  function filterBTN() {
    let newRes = resData.filter(
      (restaurant) => restaurant.info.avgRating >= 4.2
    );
    props.onFilter(newRes);
  }

  return (
    <div className='restaurant'>
      <div className='restaurant_title'>
        <h3>Restaurants with online food delivery in Delhi</h3>
      </div>
      <div className='filter_btn'>
        <button
          type='submit'
          onClick={() => {
            filterBTN();
          }}>
          Rating 4.2+
        </button>
        <button type='submit'>Rating 4.0+</button>
        <button type='submit'>Rating 4.0+</button>
        <button type='submit'>Rating 4.0+</button>
        <button type='submit'>Rating 4.0+</button>
        <button type='submit'>Rating 4.0+</button>
        <button
          type='submit'
          onClick={() => {
            props.onFilter(resData);
          }}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
