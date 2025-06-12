// HelpModal.js
import React, { Component } from 'react';
import './HelpModal.css';

export class HelpModal extends Component {
    render() {
        if (!this.props.isOpen) return null;

        return (
            <div className="help-modal-overlay" onClick={this.props.onClose}>
                <div className="help-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="help-modal-header">
                        <h2>MicroFreak Reader Community Edition - Quick Guide</h2>
                        <button className="help-close-btn" onClick={this.props.onClose}>×</button>
                    </div>
                    
                    <div className="help-modal-body">
                        <section>
                            <h3>🚀 Usage</h3>
                            <ol>
                                <li>Connect the MicroFreak to your PC via its USB or MIDI ports</li>
                                <li>If it's not already, open the Application in your browser</li>
                                <li>In the application, select the MIDI input and output ports corresponding to your MicroFreak</li>
                                <li>In the application, enter the preset number you want to read (1-512)</li>
                                <li>Click the <strong>READ</strong> button</li>
                                <li>The <strong>Read all</strong> button allows you to read all the MicroFreak presets at once. It can take some time. Be patient. Click the <strong>STOP</strong> button to abort the read process.</li>
                            </ol>
                            
                        </section>

                        <section>
                            <h3>📂 File Save</h3>
                            <p>You can save the application's currently loaded data in a JSON file. This allows you to read the MicroFreak once and, later on, to reload this file and view the presets without having to read the MicroFreak again.</p>
                            <ul>
                                <li><strong>Packs dropdown</strong> - The application already provides pre-loaded data for the factory presets and other free preset packs offered by Arturia (now includes Factory 3, 4, and 5)</li>
                                <li><strong>Load file</strong> - Import saved preset collections (JSON format)</li>
                                <li><strong>Save to file</strong> - Export presets as JSON for backup/sharing</li>
                                <li><strong>Export CSV</strong> - Generate spreadsheet with all preset parameters for reference or spreadsheet use</li>
                                <li><strong>List View</strong> - Click for a compact preset overview with slot number, names, categories, and oscillators</li>
                            </ul>
                            <p><strong>Note:</strong> The file saved by the application is <strong>not</strong> a sysex file nor a MicroFreak preset file. You cannot use it with the Arturia MIDI Control Center program.</p>
                        </section>

                        <section>
                            <h3>⚠️ Limitations</h3>
                            <h4>Sequences</h4>
                            <p>This reader does <strong>not</strong> read <strong>sequences</strong>.</p>
                            
                            <h4>Unsupported Factory Presets</h4>
                            <p>Some factory presets use a format different from user presets, especially with the MOD Matrix. The application can usually detect these presets and will display a warning if it does not support all or part of the preset format.</p>
                        </section>

                        <section>
                            <h3>🔧 Viewing Unsupported Factory Presets</h3>
                            <p>If you copy an unsupported factory preset to a user slot or overwrite an unsupported factory preset, the preset format is updated and the reader can then read it.</p>
                            
                            <h4>Copy to a user slot:</h4>
                            <p>On the MicroFreak:</p>
                            <ol>
                                <li>Press the <em>Save</em> button</li>
                                <li>Choose the destination preset with the <em>Preset</em> dial</li>
                                <li>Click on the <em>Preset</em> dial twice</li>
                                <li>Press <em>Save</em> button</li>
                            </ol>

                            <h4>Save over itself:</h4>
                            <p>First disable the write protection:</p>
                            <ol>
                                <li>Press the <em>Utility</em> button</li>
                                <li>Select <em>Misc</em></li>
                                <li>Select <em>Mem protect</em></li>
                                <li>Turn the dial to select <em>OFF</em></li>
                                <li>Click the <em>Utility</em> button</li>
                            </ol>
                            <p>Then copy the factory preset over itself:</p>
                            <ol>
                                <li>Press and hold the <em>Save</em> button for 2 seconds</li>
                            </ol>
                        </section>

                        <section>
                            <h3>🔍 Problems or Bugs</h3>
                            <p>If the application does not display anything after having read a preset, that's probably because the MIDI communication is not working correctly between your browser and the MicroFreak.</p>
                            <ul>
                                <li><strong>First try:</strong> Restart your MicroFreak</li>
                                <li><strong>If problem persists:</strong> Restart the MicroFreak and reload the application in your browser</li>
                                <li><strong>No MIDI ports visible?</strong> Ensure MicroFreak is connected and browser supports WebMIDI</li>
                                <li><strong>Preset changes not showing?</strong> Save the preset on MicroFreak first, then read again</li>
                            </ul>
                        </section>

                        <section>
                            <h3>💡 Community Edition Notes</h3>
                            <ul>
                            	<li>Firmware v1 is fully supported</li>
                                <li>Firmware v2 support is incomplete</li>
                                <li>Firmware v3 & v4 are not yet supported - contributions welcome!</li>
                                <li>Firmware v5 512 preset support works, but new v5 parameters are not yet supported</li>
                                <li>This is a community-maintained version with enhanced features</li>
                                <li>The original project is no longer maintained</li>
                            </ul>
                            <p><strong>Help Wanted:</strong> We welcome contributions to add full support for firmware versions 3-5. If you would like to help improve compatibility, please get in touch!</p>
                            
                            <h4>🙏 Acknowledgments</h4>
                            <p>Special thanks to <strong>François Georgy</strong> for his wonderful MicroFreak Reader project, which this Community Edition is forked from. His excellent work provided the foundation that made all these enhancements possible.</p>
                            <p>Original project: <a href="https://github.com/francoisgeorgy/microfreak-reader" target="_blank" rel="noopener noreferrer">github.com/francoisgeorgy/microfreak-reader</a></p>
                            
                            <p>For problems or suggestions with the Community Edition, please open an issue at: <br/>
                            <a href="https://github.com/colinmreed/community-microfreak-reader/issues" target="_blank" rel="noopener noreferrer">
                                github.com/colinmreed/community-microfreak-reader/issues
                            </a></p>
                        </section>

                        <section>
                            <h3>📜 Trademarks</h3>
                            <p>Arturia, MicroFreak and all other products, logos or company names quoted in this document and in the application are trademarks or registered trademarks of their respective owners.</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}