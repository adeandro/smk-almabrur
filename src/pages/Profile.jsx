import headMaster from "./../assets/img/headmaster.png";
import guru1 from "./../assets/img/DAB_4909.jpg";

function Profile() {
  return (
    <>
      <section id="profile" className=" bg-white dark:bg-slate-500">
        <div className="container pt-20">
          {/* sambutan kepala sekolah  */}
          <div className="w-full flex flex-col items-center bg-transparent border border-primary rounded-md shadow md:flex-row  dark:bg-slate-700 relative dark:border-slate-200 xl:max-w-3xl xl:mx-auto mb-8">
            <div className="w-full">
              <img src={headMaster} alt="" className="max-w-full mx-auto" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white capitalize text-center ">
                sambutan kepala sekolah{" "}
                <span className="block">SMK Al-Mabrur Pejawaran</span>
              </h5>
              <p className="mb-4 font-normal text-dark dark:text-white text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                rem earum reiciendis ullam hic culpa corrupti? Eveniet quia
                rerum iusto?
              </p>
              <h5 className="text-lg text-right text-dark dark:text-white underline underline-offset-4">
                AGUNG TRIDANA, S.Pd.
              </h5>
              <p className="text-md text-right text-dark dark:text-slate-200">
                NIP.1231928
              </p>
            </div>
          </div>
          {/* akhir sambutan kepala sekolah  */}
          {/* visi & misi */}
          <div className="flex flex-wrap md:gap-3 justify-center">
            <div className="w-full lg:max-w-lg border border-primary dark:border-slate-200 rounded-md p-4 shadow-sm mb-4 dark:bg-slate-700">
              <div>
                <h1 className="text-2xl text-primary font-bold uppercase text-center mb-4">
                  Visi
                </h1>
                <p className="text-center text-dark dark:text-white">
                  Menjadi Sekolah yang mampu menghasilkan lulusan yang cerdas,
                  terampil, mandiri, berwawasan global, dan berakhlak mulia
                </p>
              </div>
            </div>

            <div className="w-full lg:max-w-lg border border-primary dark:border-slate-200 rounded-md p-4 shadow-sm mb-4 dark:bg-slate-700">
              <div className="mx-4 text-justify">
                <h1 className="text-2xl text-center text-primary font-bold uppercase mb-4">
                  Misi
                </h1>
                <ol className="list-decimal text-dark dark:text-white">
                  <li>
                    Menyelenggarakan pendidikan yang menyenangkan dan bermutu
                  </li>
                  <li>
                    Menyelenggarakan pendidikan untuk menghasilkan lulusan yang
                    terampil dan mandiri
                  </li>
                  <li>
                    menyenangkan pendidikan agar lulusan memiliki kompetensi
                    untuk bersaing dalam era global
                  </li>
                  <li>
                    Menyelenggarakan pendidikan untuk mewujudkan lulusan yang
                    berakhlak mulia dengan menjalankan tata nilai islam
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* akhir visi & misi  */}
          {/* guru & staf */}
          <div className="my-10">
            <h1 className="text-center text-primary text-5xl font-bold my-10">
              Guru & Staf
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-8 pb-5">
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-dark dark:border-white ">
                <img src={guru1} alt="guru1" className="rounded-t-lg" />
                <div className="p-5 py-10">
                  <table className="w-full text-sm text-left text-dark dark:text-white">
                    <tr>
                      <td className="font-bold">Nama</td>
                      <td>Dandi Yudiyanto</td>
                    </tr>
                    <tr>
                      <td className="font-bold">NIY</td>
                      <td>34857398</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Pelajaran</td>
                      <td>Informatika</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* akhir guru & staf  */}
        </div>
      </section>
    </>
  );
}

export default Profile;
