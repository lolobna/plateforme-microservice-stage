import React from "react";

function ContentBody() {
  return (
    <>
<div className="content-body">
  <div className="container-fluid">
    <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
        <div className="welcome-text">
          <h4>Hi, welcome back!</h4>
          <p className="mb-0">Your business dashboard template</p>
        </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
          <li className="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
        </ol>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="stat-widget-one card-body">
            <div className="stat-icon d-inline-block">
              <i className="ti-money text-success border-success" />
            </div>
            <div className="stat-content d-inline-block">
              <div className="stat-text">Profit</div>
              <div className="stat-digit">1,012</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="stat-widget-one card-body">
            <div className="stat-icon d-inline-block">
              <i className="ti-user text-primary border-primary" />
            </div>
            <div className="stat-content d-inline-block">
              <div className="stat-text">Customer</div>
              <div className="stat-digit">961</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="stat-widget-one card-body">
            <div className="stat-icon d-inline-block">
              <i className="ti-layout-grid2 text-pink border-pink" />
            </div>
            <div className="stat-content d-inline-block">
              <div className="stat-text">Projects</div>
              <div className="stat-digit">770</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="stat-widget-one card-body">
            <div className="stat-icon d-inline-block">
              <i className="ti-link text-danger border-danger" />
            </div>
            <div className="stat-content d-inline-block">
              <div className="stat-text">Referral</div>
              <div className="stat-digit">2,781</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Fee Collections and Expenses</h4>
          </div>
          <div className="card-body">
            <div className="ct-bar-chart mt-5" />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="ct-pie-chart" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">All Exam Result</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table student-data-table m-t-20">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade Point</th>
                    <th>Percent Form</th>
                    <th>Percent Upto</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Class Test</td>
                    <td>Mathmatics</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>Mathmatics</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>English</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>Bangla</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>Mathmatics</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>English</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                  <tr>
                    <td>Class Test</td>
                    <td>Mathmatics</td>
                    <td>
                      4.00
                    </td>
                    <td>
                      95.00
                    </td>
                    <td>
                      100
                    </td>
                    <td>20/04/2017</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4 col-xxl-6 col-md-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Timeline</h4>
          </div>
          <div className="card-body">
            <div className="widget-timeline">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge primary" />
                  <a className="timeline-panel text-muted" href="#">
                    <span>10 minutes ago</span>
                    <h6 className="m-t-5">Youtube, a video-sharing website, goes live.</h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge warning">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>20 minutes ago</span>
                    <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge danger">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>30 minutes ago</span>
                    <h6 className="m-t-5">Google acquires Youtube.</h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge success">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>15 minutes ago</span>
                    <h6 className="m-t-5">StumbleUpon is acquired by eBay. </h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge warning">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>20 minutes ago</span>
                    <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge dark">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>20 minutes ago</span>
                    <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge info">
                  </div>
                  <a className="timeline-panel text-muted" href="#">
                    <span>30 minutes ago</span>
                    <h6 className="m-t-5">Google acquires Youtube.</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-xxl-6 col-md-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Notice Board</h4>
          </div>
          <div className="card-body">
            <div className="recent-comment m-t-15">
              <div className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/4.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-primary">john doe</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <p className="comment-date">10 min ago</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/2.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-success">Mr. John</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <p className="comment-date">1 hour ago</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/3.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-danger">Mr. John</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <div className="comment-date">Yesterday</div>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/4.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-primary">john doe</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <p className="comment-date">10 min ago</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/2.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-success">Mr. John</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <p className="comment-date">1 hour ago</p>
                </div>
              </div>
              <div className="media no-border">
                <div className="media-left">
                  <a href="#"><img className="media-object mr-3" src="./images/avatar/3.png" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-info">Mr. John</h4>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                  <div className="comment-date">Yesterday</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Todo</h4>
          </div>
          <div className="card-body px-0">
            <div className="todo-list">
              <div className="tdl-holder">
                <div className="tdl-content widget-todo2 mr-4">
                  <ul id="todo_list">
                    <li><label><input type="checkbox" /><i /><span>Get up</span><a href="#" className="ti-trash" /></label></li>
                    <li><label><input type="checkbox" defaultChecked /><i /><span>Stand up</span><a href="#" className="ti-trash" /></label></li>
                    <li><label><input type="checkbox" /><i /><span>Don't give up the
                          fight.</span><a href="#" className="ti-trash" /></label></li>
                    <li><label><input type="checkbox" defaultChecked /><i /><span>Do something
                          else</span><a href="#" className="ti-trash" /></label></li>
                    <li><label><input type="checkbox" defaultChecked /><i /><span>Stand up</span><a href="#" className="ti-trash" /></label></li>
                    <li><label><input type="checkbox" /><i /><span>Don't give up the
                          fight.</span><a href="#" className="ti-trash" /></label></li>
                  </ul>
                </div>
                <div className="px-4">
                  <input type="text" className="tdl-new form-control" placeholder="Write new item and hit 'Enter'..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-xxl-6 col-lg-6 col-md-12">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
            <div className="card">
              <div className="social-graph-wrapper widget-facebook">
                <span className="s-icon"><i className="fa fa-facebook" /></span>
              </div>
              <div className="row">
                <div className="col-6 border-right">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                    <p className="m-0">Friends</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                    <p className="m-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
            <div className="card">
              <div className="social-graph-wrapper widget-linkedin">
                <span className="s-icon"><i className="fa fa-linkedin" /></span>
              </div>
              <div className="row">
                <div className="col-6 border-right">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                    <p className="m-0">Friends</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                    <p className="m-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
            <div className="card">
              <div className="social-graph-wrapper widget-googleplus">
                <span className="s-icon"><i className="fa fa-google-plus" /></span>
              </div>
              <div className="row">
                <div className="col-6 border-right">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                    <p className="m-0">Friends</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                    <p className="m-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
            <div className="card">
              <div className="social-graph-wrapper widget-twitter">
                <span className="s-icon"><i className="fa fa-twitter" /></span>
              </div>
              <div className="row">
                <div className="col-6 border-right">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                    <p className="m-0">Friends</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                    <p className="m-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="year-calendar" />
          </div>
        </div>
        {/* /# card */}
      </div>
      <div className="col-lg-8">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">All Expense</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table student-data-table m-t-20">
                <thead>
                  <tr>
                    <th>Expense Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      $2000
                    </td>
                    <td>
                      <span className="badge badge-primary">Paid</span>
                    </td>
                    <td>
                      edumin@gmail.com
                    </td>
                    <td>
                      10/05/2017
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      $2000
                    </td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td>
                      edumin@gmail.com
                    </td>
                    <td>
                      10/05/2017
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      $2000
                    </td>
                    <td>
                      <span className="badge badge-primary">Paid</span>
                    </td>
                    <td>
                      edumin@gmail.com
                    </td>
                    <td>
                      10/05/2017
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      $2000
                    </td>
                    <td>
                      <span className="badge badge-danger">Due</span>
                    </td>
                    <td>
                      edumin@gmail.com
                    </td>
                    <td>
                      10/05/2017
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      $2000
                    </td>
                    <td>
                      <span className="badge badge-primary">Paid</span>
                    </td>
                    <td>
                      edumin@gmail.com
                    </td>
                    <td>
                      10/05/2017
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default ContentBody;
