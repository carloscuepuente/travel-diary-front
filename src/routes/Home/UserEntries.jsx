import "./UserEntries.css";
export default function UserEntries({ entry }) {
  //     id: 2,
  // title: "Historia mística",
  // place: "Iglesia de Cambados",
  // userId: 1,
  // email: "mancontr@gmail.com",
  // votes: "0.0000",
  // createdAt: "2024-09-15T11:46:29.000Z",
  // photos: [
  // {
  // id: 4,
  // name: "b5f2bcfb-12cc-4a41-a040-f362835692f2.jpg"
  // },
  // {
  // id: 5,
  // name: "e9f7e311-e309-4ae0-9a82-a3f95c3ab60c.jpg"
  // }
  // ]

  return (
    <div className="photoInfo">
      <h1> {entry.title} </h1>
      <h2> {entry.place} </h2>
      <div className="image">
        {entry.photos?.map((photo) => (
          <img
            src={`https://travel-diary-api.anxoso.com/uploads/${photo.name} `}
            key={photo.id}
          />
        ))}
      </div>
    </div>
  );
}
