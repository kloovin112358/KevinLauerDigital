import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ComparisonTable = () => (
  <Fade duration={2000} triggerOnce={true}>
  <div className="card shadow-lg border border-primary mt-4 mx-auto" style={{maxWidth:"60rem"}}>
    <div className="card-body">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">A good car mechanic</th>
            <th>A good software developer (me)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doesn't charge you an arm and a leg for an oil change</td>
            <td>Makes pricing crystal-clear, and won't charge you $1,000 for a two-hour project</td>
          </tr>
          <tr>
            <td>Doesn't try to sell you blinker fluid</td>
            <td>Never upsells you on services you don't need</td>
          </tr>
          <tr>
            <td>Doesn't charge you when your air conditioning is still broken after they "fixed" it</td>
            <td>Refunds you for any work not done to your satisfaction</td>
          </tr>
          <tr>
            <td>Doesn't leave your car in the lot for weeks before getting started</td>
            <td>Starts working as soon as you give the green light <i>(pending schedule constraints)</i></td>
          </tr>
          <tr>
            <td>Won't make large decisions without your consent</td>
            <td>Seeks out feedback throughout development to ensure your satisfaction with the output</td>
          </tr>
          <tr>
            <td>Actually calls you back</td>
            <td>Responds to all inquiries within 24 hours with a price and time estimate</td>
          </tr>
          <tr>
            <td>Will take care of you, no matter the size of the fix</td>
            <td>Supports any size of project, all the way down to a quick VBA macro</td>
          </tr>
          <tr>
            <td>Shows you how to fix the simple things yourself</td>
            <td>Provides documentation on how to maintain projects</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </Fade>
);

export default ComparisonTable;