import "bootstrap/dist/css/bootstrap.min.css";
import Lines from "./Lines";
import BarCharts from "./BarCharts";
import "./App.css";
import Navs from "./Navs";
import LinearChart from "./LinearChart";
function App() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 1400, pv: 8400, amt: 2400 },
    { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 1400, pv: 8400, amt: 2400 },
    { name: "Page E", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 1400, pv: 8400, amt: 2400 },
  ];

  return (
    <>
      <Navs />
      <div className="">
        <div className="col-md-12  d-flex">
          <div
            className="col-md-3 col-sm-6 m-2 p-1"
            style={{ background: "#28445c" }}
          >
            <Lines data={data}></Lines>
          </div>
          <div
            className="col-md-3 col-sm-6 p-1 m-2"
            style={{ background: "#28445c" }}
          >
            <BarCharts data={data} />
          </div>

          <div className="col-md-3 p-3" style={{ background: "#28445c" }}>
            <Lines data={data}></Lines>
          </div>
          <div className="col-md-3 p-3 " style={{ background: "#28445c" }}>
            <BarCharts data={data} />
          </div>
        </div>

        <div className="col-sm-12 d-flex mt-5">
          <div className="col-sm-8 mr-2 commonHighliter">
            <LinearChart data={data} />
          </div>

          <div className="col-sm-4 mx-sm-auto ">
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <i className="fa fa-industry fonts" aria-hidden="true"></i>
              <div className="col-sm-2 fonts">
                <span>MarketCap</span>
              </div>
              <div className="col-sm-2 fonts">Up </div>
              <div className="col-sm-2 fonts">Down</div>
            </div>

            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-5">
        <div className="col-sm-4  ">
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <i className="fa fa-industry fonts" aria-hidden="true"></i>
              <div className="col-sm-2 fonts">
                <span>MarketCap</span>
              </div>
              <div className="col-sm-2 fonts">Up </div>
              <div className="col-sm-2 fonts">Down</div>
            </div>

            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
            <div className="col-md-12 d-flex p-2 commonHighliter">
              <div className="rounded-2">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Plus-XBC-icon.png"
                  height="30"
                  width="30"
                  alt="imgs 1"
                />
              </div>
              <div className="col-sm-2 fonts">
                <span>EBH</span>
              </div>
              <div className="col-sm-2 fonts">$271.56</div>
              <div className="col-sm-2 fonts">-4.06 </div>
            </div>
          </div>

          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
