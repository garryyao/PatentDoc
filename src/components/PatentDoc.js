import 'glyphicon/style.scss';
import 'styles/PatentDoc.scss';

import 'tether';
import 'jquery';
import 'bootstrapjs';
import '../utils/anchor-scroll';

import React from 'react'
import PatentDocType from './Types'

class PatentDoc extends React.Component {
  render() {
    const doc = this.props.document;
    return <div className="container-fluid">
      <div className="row">

        <div className="col-lg-4 hidden-md-down">

          {/* Basic infos */}
          <div className="card sticky-top card-patent-basic">
            <div className="card-block card-inverse bg-primary">
              <h2 className="card-title">US-19960903-A</h2>
              <h4 className="card-subtitle">No. 5551212</h4>
            </div>

            <div className="card-block card-block-compact">
              <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between">
                  <h5 className="card-title">
                    Inventors:
                  </h5>
                  <span className="icon icon-inventor"/>
                </li>
                <li className="list-group-item justify-content-between">
                  <span className="display-name">ODENTHAL; HEINZ F.</span>
                  <span className="address">US</span>
                </li>
                <li className="list-group-item justify-content-between">
                  <span className="display-name">Heinz F. Odenthal</span>
                  <span className="address">Zulpich, DE</span>
                </li>
              </ul>
            </div>

            <div className="card-block card-block-compact">
              <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between">
                  <h5 className="card-title">Assignee:</h5>
                  <span className="icon icon-assignee"/>
                </li>
                <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
              </ul>
            </div>

            <div className="card-block card-block-compact">
              <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between">
                  <h5 className="card-title">
                    Agents:
                  </h5>
                  <span className="icon icon-agents"/>
                </li>
                <li className="list-group-item">Herbert Dubno</li>
                <li className="list-group-item">Andrew Wilford</li>
              </ul>
            </div>

            <div className="card-block card-block-compact">
              <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between">
                  <h5 className="card-title">Applicants:</h5>
                  <span className="icon icon-applicant"/>
                </li>
                <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
                <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
              </ul>
            </div>

            <div className="card-block card-block-compact">
              <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between">
                  <h5 className="card-title">Examiners:</h5>
                  <span className="icon icon-examinee"/>
                </li>
                <li className="list-group-item">Linda Johnson, US</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col">
          <div className="container">

            {/* Basic info*/}
            <div className="row">
              <div className="col hidden-lg-up">

                <div className="card card-patent-basic">
                  <div className="card-block card-inverse bg-primary">
                    <h2 className="card-title">US-19960903-A</h2>
                    <h4 className="card-subtitle">No. 5551212</h4>
                  </div>

                  <div className="card-block card-block-compact">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item justify-content-between">
                        <h5 className="card-title">
                          Inventors:
                        </h5>
                        <span className="icon icon-inventor"/>
                      </li>
                      <li className="list-group-item justify-content-between">
                        <span className="display-name">ODENTHAL; HEINZ F.</span>
                        <span className="address">US</span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        <span className="display-name">Heinz F. Odenthal</span>
                        <span className="address">Zulpich, DE</span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        <span className="display-name">Heinz F. Odenthal</span>
                        <span className="address">Zulpich, DE</span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        <span className="display-name">Heinz F. Odenthal</span>
                        <span className="address">Zulpich, DE</span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        <span className="display-name">Heinz F. Odenthal</span>
                        <span className="address">Zulpich, DE</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-block card-block-compact">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item justify-content-between">
                        <h5 className="card-title">Assignee:</h5>
                        <span className="icon icon-assignee"/>
                      </li>
                      <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
                    </ul>
                  </div>

                  <div className="card-block card-block-compact">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item justify-content-between">
                        <h5 className="card-title">
                          Agents:
                        </h5>
                        <span className="icon icon-agents"/>
                      </li>
                      <li className="list-group-item">Herbert Dubno</li>
                      <li className="list-group-item">Andrew Wilford</li>
                    </ul>
                  </div>

                  <div className="card-block card-block-compact">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item justify-content-between">
                        <h5 className="card-title">Applicants:</h5>
                        <span className="icon icon-applicant"/>
                      </li>
                      <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
                      <li className="list-group-item">OSTMA MASCHINENBAU GMBH</li>
                    </ul>
                  </div>

                  <div className="card-block card-block-compact">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item justify-content-between">
                        <h5 className="card-title">Examiners:</h5>
                        <span className="icon icon-examinee"/>
                      </li>
                      <li className="list-group-item">Linda Johnson, US</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Navbar */}
            <nav id="navbar-top" className="navbar navbar-toggleable navbar-light bg-faded sticky-top">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                      data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>

              <a className="navbar-brand" href="#">
                <span className="icon icon-patent align-middle pr-1"/>
                <span>Patent Details</span>
              </a>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="scroll nav-link" href="#abstracts">Abstracts</a>
                  </li>
                  <li className="nav-item">
                    <a className="scroll nav-link" href="#claims">Claims</a>
                  </li>
                  <li className="nav-item">
                    <a className="scroll nav-link" href="#desc">Description</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="row">
              <div className="col">
                {/* Abstracts */}
                <div id="abstracts" className="card card-light">
                  <div className="card-header justify-content-between">
                    <h4 className="card-title">Abstracts</h4>
                    <span className="icon icon-abstract pr-1"/>
                  </div>

                  <div className="card-block">
                    <p className="card-text">
                      A package is formed by holding a nonextensible strip taut and wrapping it around the upper
                      and/or
                      lower
                      periphery of the bundle and joining the ends of the strip segments e.g. by adhesive bonding. A
                      projecting margin of the strip is folded to overlie the bundle or underlie the bundle so that an
                      L-configuration is imparted to the frame formed around the bundle after the strip is applied
                      thereto.
                    </p>
                  </div>
                </div>

                {/* Claims */}

                <div id="claims" className="card card-light">
                  <div className="card-header justify-content-between">
                    <h4 className="card-title">Claims</h4>
                    <span className="icon icon-claim pr-1"/>
                  </div>

                  <div className="card-block">
                    <h4>I claim:</h4>
                    <ol className="list-unstyled">
                      <li className="card-text">1. A method of packaging a plurality of articles, the method
                        comprising
                        the steps of:
                      </li>
                      <li className="card-text">2. The method defined in claim 1 wherein the articles are rectangular
                        parallelepipeds.
                      </li>
                      <li className="card-text">3. The method defined in claim 2 wherein another such strip is
                        applied by
                        steps
                        (b) to (e) to the other of the edges of the bundle so that margins of both of the strips are
                        folded to
                        overlie and underlie the bundle on the respective top and bottom surfaces thereof, whereby
                        respective
                        open frame fields are formed on the top and bottom surfaces of the bundle as well as on the
                        side
                        faces
                        between the upper and lower edges.
                      </li>
                      <li className="card-text">4. The method defined in claim 1, further comprising the step of</li>
                      <li className="card-text">5. The method defined in claim 1, further comprising the step of</li>
                      <li className="card-text">6. The method defined in claim 3, further comprising the step of</li>
                      <li className="card-text">7. The method defined in claim 6 wherein the bundle has vertical
                        corners
                        and
                        the connectors are folded bands of packaging material lying along the corners of the bundle
                        and
                        adhesively bonded to the strips at the corners of the bundle.
                      </li>
                      <li className="card-text">8. The method defined in claim 6 wherein the bundle has vertical
                        corners
                        and
                        the connectors are bands of packaging material lying on the side faces of the bundle and
                        adhesively
                        bonded to the strips between the corners of the bundle.
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Description */}
                <div id="desc" className="card card-light">
                  <div className="card-header justify-content-between">
                    <h4 className="card-title"> Description </h4>
                    <span className="icon icon-description pr-1"/>
                  </div>
                  <div className="card-block">
                    <h4>CROSS REFERENCE TO RELATED APPLICATIONS</h4>
                    <p className="card-text">This application is a file-wrapper-continuation of copending patent
                      application
                      Ser. No. 07/747,196 filed 16 Aug., 1991 (now abandoned) with a claim to the priority of German
                      patent
                      application P 4,027,762 filed 1 Sep., 1990.</p>
                    <h4>1.Field of the Invention</h4>
                    <p className="card-text">My present invention relates to a method of packaging articles which can be
                      assembled in a bundle or stack and which can be encircled by a retainer to form a package. More
                      particularly, the invention relates to the formation of a package from a bundle of such articles
                      in
                      which the packaging material forms a frame having at least one open frame field.</p>

                    <h4>2. Background of the Invention</h4>
                    <p className="card-text">German Utility Model 80 02 686 describes a process for the packaging of
                      articles wherein L-shaped bars are applied to the edges of a stack. The L-shaped bars are
                      preferably
                      deep drawn plastic sections. Because of unavoidable tolerances between the material to be packaged
                      and
                      the encircling frame, retaining bands are required which must pass over the packaged material and
                      across the open frame field. The formation of the package is expensive at least in part because
                      format
                      specific and product-specific L-shaped sections must be used and changeover for the packaging of
                      stacks of different size or articles of different size is not simple. The same drawbacks apply
                      also in
                      the system described in EP-A- 0 313 721 in which a frame for supporting the articles is assembled
                      from
                      a multiplicity of prefabricated packaging bars.</p>
                    <p className="card-text">
                      The process described in German Patent Document DE-OS 36 06 826 applies a strongly stretched
                      elongatable foil to the material to be packaged with a projecting margin such that the tension
                      applied
                      to the foil causes the margin to overlap the articles to be packaged. This type of packaging does
                      not
                      provide a shape-stable support frame structure. The cost of material for the packaging is high
                      and,
                      upon opening of the package, significant waste is generated, creating waste disposal problems.
                    </p>
                    <p className="card-text">German Patent Document DE-OS 31 38 439 describes a process for producing
                      shaft-like packages with stiff bottom and top members and sidewalls. The packaging material is
                      wrapped
                      around the products to be packaged which are stacked on the bottom member and covered by the top
                      member. This packaging material is wound around the assembly as a lateral strip and has margins
                      projecting above the top part and below the bottom part and which can be adhesively bonded to
                      them.</p>
                    <p className="card-text">A frame structure with an open field is not formed by this method.</p>

                    <h4>3. Objects of the Invention</h4>
                    <p className="card-text">It is, therefore, an important object of the present invention to provide a
                      packaging method which provides a support frame for the packaged articles and thus has an open
                      construction, but which nevertheless affords shape stability to the frame and allows the packaging
                      method to be applicable to a wide variety of product sizes and shapes and packaging formats.</p>
                  </div>
                </div>


                {/* Copyright */}
                <div className="card-block">
                  <hr />
                  <div className="copyright">
                    <p>
                      User acknowledges that Fairview Research and its third party providers
                      retain all right, title and interest in and to this xml under applicable copyright laws. User
                      acquires no ownership rights to this xml including but not limited to its format. User hereby
                      accepts the terms and conditions of the License Agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  }
}
PatentDoc.propTypes = {
  document: PatentDocType
}
export default PatentDoc