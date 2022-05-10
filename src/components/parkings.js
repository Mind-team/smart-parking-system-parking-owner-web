export const CreateParkingsInfo = (data) => {
  return (
    <div className="box">
      <div className="title">{data.title}</div> <br />
      <div className="busy">Занятых мест: {data.busy}</div>
      <button className="detail">Подробнее</button>
    </div>
  );
};
