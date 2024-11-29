import React, { useState } from 'react';
import './App.css';

function App() {
  const [designation, setDesignation] = useState('');

  const toggleQuestions = (e) => {
    setDesignation(e.target.value);
  };

  return (
    <div>
      <header>
        <img src="your-logo.png" alt="Abron Technologies Logo" className="logo" />
        <h1>Abron Technologies Survey</h1>
      </header>

      <div className="description">
        Gather strategic insights into product utility, organizational fit, and high-level feature preferences.
      </div>

      <form id="surveyForm">
        <div className="progress-bar">
          <div className="progress" id="formProgress"></div>
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <select 
            id="designation" 
            name="designation" 
            required 
            onChange={toggleQuestions}
            value={designation}
          >
            <option value="">Select Designation</option>
            <option value="entrepreneur">Entrepreneur/Director/Stake Holder</option>
            <option value="cxo">CXO</option>
            <option value="manager">Manager</option>
            <option value="hr">HR</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry Type:</label>
          <select id="industry" name="industry" required>
            <option value="">Select Industry</option>
            <option value="technology">Technology</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="healthcare">Healthcare</option>
            <option value="retail">Retail</option>
            <option value="finance">Finance</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="employees">Number of Employees:</label>
          <select id="employees" name="employees" required>
            <option value="">Select Range</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-300">101-300</option>
            <option value="301-500">301-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1001+">1001 and Above</option>
          </select>
        </div>

        {(designation === 'entrepreneur' || designation === 'cxo') && (
          <div id="seniorQuestions">
            <div className="form-group">
              <label>1. How important is automation in HR and people management for your organization?</label>
              <select name="automation_importance" required>
                <option value="">Select Answer</option>
                <option value="very_important">Very Important</option>
                <option value="important">Important</option>
                <option value="somewhat_important">Somewhat Important</option>
                <option value="not_important">Not Important</option>
              </select>
            </div>

            <div className="form-group">
              <label>2. Would you consider adopting software for integrated HR, payroll, and employee management?</label>
              <select name="software_adoption" required>
                <option value="">Select Answer</option>
                <option value="yes">Yes</option>
                <option value="maybe">Maybe</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>3. How useful do you find the following features?</label>
              <table className="rating-table">
                <tbody>
                  <tr>
                    <td>Employee Attendance and Leave Management</td>
                    <td>
                      <input type="radio" name="rating_attendance" value="1" required /> 1
                      <input type="radio" name="rating_attendance" value="2" /> 2
                      <input type="radio" name="rating_attendance" value="3" /> 3
                      <input type="radio" name="rating_attendance" value="4" /> 4
                      <input type="radio" name="rating_attendance" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Overtime/Deficit Hours Tracking</td>
                    <td>
                      <input type="radio" name="rating_overtime" value="1" required /> 1
                      <input type="radio" name="rating_overtime" value="2" /> 2
                      <input type="radio" name="rating_overtime" value="3" /> 3
                      <input type="radio" name="rating_overtime" value="4" /> 4
                      <input type="radio" name="rating_overtime" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Payroll Management</td>
                    <td>
                      <input type="radio" name="rating_payroll" value="1" required /> 1
                      <input type="radio" name="rating_payroll" value="2" /> 2
                      <input type="radio" name="rating_payroll" value="3" /> 3
                      <input type="radio" name="rating_payroll" value="4" /> 4
                      <input type="radio" name="rating_payroll" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Interview Outcome Analysis</td>
                    <td>
                      <input type="radio" name="rating_interview" value="1" required /> 1
                      <input type="radio" name="rating_interview" value="2" /> 2
                      <input type="radio" name="rating_interview" value="3" /> 3
                      <input type="radio" name="rating_interview" value="4" /> 4
                      <input type="radio" name="rating_interview" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Source-wise Recruitment Performance</td>
                    <td>
                      <input type="radio" name="rating_recruitment" value="1" required /> 1
                      <input type="radio" name="rating_recruitment" value="2" /> 2
                      <input type="radio" name="rating_recruitment" value="3" /> 3
                      <input type="radio" name="rating_recruitment" value="4" /> 4
                      <input type="radio" name="rating_recruitment" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Employee Concern Ticketing System</td>
                    <td>
                      <input type="radio" name="rating_ticketing" value="1" required /> 1
                      <input type="radio" name="rating_ticketing" value="2" /> 2
                      <input type="radio" name="rating_ticketing" value="3" /> 3
                      <input type="radio" name="rating_ticketing" value="4" /> 4
                      <input type="radio" name="rating_ticketing" value="5" /> 5
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="form-group">
                <label>Are there any features you believe are missing or critical for your organizational needs?</label>
                <textarea name="missing_features" rows="4"></textarea>
              </div>
            </div>

            <div className="form-group">
              <label>4. How well does our solution align with your organizational goals?</label>
              <select name="solution_alignment" required>
                <option value="">Select Answer</option>
                <option value="perfectly">Perfectly</option>
                <option value="somewhat">Somewhat</option>
                <option value="not_at_all">Not at all</option>
              </select>
            </div>

            <div className="form-group">
              <label>5. How likely are you to adopt this software within the next 6 months?</label>
              <select name="adoption_likelihood" required>
                <option value="">Select Answer</option>
                <option value="very_likely">Very Likely</option>
                <option value="likely">Likely</option>
                <option value="neutral">Neutral</option>
                <option value="unlikely">Unlikely</option>
                <option value="very_unlikely">Very Unlikely</option>
              </select>
            </div>

            <div className="form-group">
              <label>6. What would influence your purchase decision the most?</label>
              <div className="checkbox-group">
                <div className="checkbox-option">
                  <input type="checkbox" name="purchase_influence" id="cost" value="cost" />
                  <label htmlFor="cost">Cost</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="purchase_influence" id="customizability" value="customizability" />
                  <label htmlFor="customizability">Customizability</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="purchase_influence" id="scalability" value="scalability" />
                  <label htmlFor="scalability">Scalability</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="purchase_influence" id="user_experience" value="user_experience" />
                  <label htmlFor="user_experience">User Experience</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="purchase_influence" id="support" value="support" />
                  <label htmlFor="support">Support and Training Services</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>7. Any additional feedback or suggestions for us?</label>
              <textarea name="additional_feedback" rows="4"></textarea>
            </div>
          </div>
        )}

        {(designation === 'manager' || designation === 'hr' || designation === 'employee') && (
          <div id="staffQuestions">
            <div className="form-group">
              <label>1. What are your biggest challenges in managing teams and operations?</label>
              <div className="checkbox-group">
                <div className="checkbox-option">
                  <input type="checkbox" name="challenges" id="attendance" value="attendance" />
                  <label htmlFor="attendance">Attendance/Leave Management</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="challenges" id="performance" value="performance" />
                  <label htmlFor="performance">Performance Tracking</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="challenges" id="payroll" value="payroll" />
                  <label htmlFor="payroll">Payroll Coordination</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="challenges" id="concerns" value="concerns" />
                  <label htmlFor="concerns">Handling Employee Concerns</label>
                </div>
                <div className="checkbox-option">
                  <input type="checkbox" name="challenges" id="recruitment" value="recruitment" />
                  <label htmlFor="recruitment">Recruitment/Onboarding Processes</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>2. How often do you need data on overtime, deficit hours, and employee availability?</label>
              <select name="data_frequency" required>
                <option value="">Select Answer</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="rarely">Rarely</option>
              </select>
            </div>

            <div className="form-group">
              <label>3. How easy do you think the following features will make your daily tasks?</label>
              <table className="rating-table">
                <tbody>
                  <tr>
                    <td>Employee Attendance and Leave Management</td>
                    <td>
                      <input type="radio" name="ease_attendance" value="1" required /> 1
                      <input type="radio" name="ease_attendance" value="2" /> 2
                      <input type="radio" name="ease_attendance" value="3" /> 3
                      <input type="radio" name="ease_attendance" value="4" /> 4
                      <input type="radio" name="ease_attendance" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Overtime/Deficit Hours Tracking</td>
                    <td>
                      <input type="radio" name="ease_overtime" value="1" required /> 1
                      <input type="radio" name="ease_overtime" value="2" /> 2
                      <input type="radio" name="ease_overtime" value="3" /> 3
                      <input type="radio" name="ease_overtime" value="4" /> 4
                      <input type="radio" name="ease_overtime" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Ticketing System for Employee Concerns</td>
                    <td>
                      <input type="radio" name="ease_ticketing" value="1" required /> 1
                      <input type="radio" name="ease_ticketing" value="2" /> 2
                      <input type="radio" name="ease_ticketing" value="3" /> 3
                      <input type="radio" name="ease_ticketing" value="4" /> 4
                      <input type="radio" name="ease_ticketing" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Recruitment Performance Metrics</td>
                    <td>
                      <input type="radio" name="ease_recruitment" value="1" required /> 1
                      <input type="radio" name="ease_recruitment" value="2" /> 2
                      <input type="radio" name="ease_recruitment" value="3" /> 3
                      <input type="radio" name="ease_recruitment" value="4" /> 4
                      <input type="radio" name="ease_recruitment" value="5" /> 5
                    </td>
                  </tr>
                  <tr>
                    <td>Interview Feedback Recording</td>
                    <td>
                      <input type="radio" name="ease_feedback" value="1" required /> 1
                      <input type="radio" name="ease_feedback" value="2" /> 2
                      <input type="radio" name="ease_feedback" value="3" /> 3
                      <input type="radio" name="ease_feedback" value="4" /> 4
                      <input type="radio" name="ease_feedback" value="5" /> 5
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="form-group">
                <label>Would you recommend any changes or additions to improve these features?</label>
                <textarea name="feature_improvements" rows="4"></textarea>
              </div>
            </div>

            <div className="form-group">
              <label>4. How likely are you to advocate for implementing this product in your organization?</label>
              <select name="advocacy_likelihood" required>
                <option value="">Select Answer</option>
                <option value="very_likely">Very Likely</option>
                <option value="likely">Likely</option>
                <option value="neutral">Neutral</option>
                <option value="unlikely">Unlikely</option>
                <option value="very_unlikely">Very Unlikely</option>
              </select>
            </div>

            <div className="form-group">
              <label>5. Are there specific integrations or reports that would enhance this tool's utility for your team?</label>
              <textarea name="integration_suggestions" rows="4"></textarea>
            </div>

            <div className="form-group">
              <label>6. Any additional feedback or suggestions for us?</label>
              <textarea name="additional_feedback" rows="4"></textarea>
            </div>
          </div>
        )}

        <button type="submit">Submit Survey</button>
      </form>

      <footer>
        <p>© 2024 All Rights Reserved to Abron Technologies Private Limited</p>
      </footer>
    </div>
  );
}

export default App;