// export async function dashboardLoader() {
//   const userName = fetchData('userName')

//   return { userName }
// }

const Dashboard = () => {
  return (
    <div className="pt-12">
      <div className="student-info">
        <div className="info-row flex gap-8">
          <label className="font-bold text-2xl" htmlFor="name">
            Full Name
          </label>
          <p className="text-2xl">{fullName}</p>
        </div>
        <div className="info-row flex gap-8">
          <label className="font-bold text-2xl" htmlFor="name">
            Department
          </label>
          <p className="text-2xl">{fullName}</p>
        </div>
        <div className="info-row flex gap-8">
          <label className="font-bold text-2xl" htmlFor="name">
            Full Name
          </label>
          <p className="text-2xl">{fullName}</p>
        </div>
        <div className="info-row flex gap-8">
          <label className="font-bold text-2xl" htmlFor="name">
            Full Name
          </label>
          <p className="text-2xl">{fullName}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{fullName}</h1>
      {/* <Announcements announcements={announcements} /> */}
    </div>
  )
}

export default Dashboard
