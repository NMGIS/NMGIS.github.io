export const projects = [
    //COC PIT
    {
        slug: 'COCPIT',
        title: 'CoC-PIT: U.S. Homelessness Data Explorer',
        image: '/mappng/COCPIT.png',
        appLink: 'https://nevinm.com/CoC-PIT/',
        github: 'https://github.com/NMGIS/CoC-PIT',
        stack: [
            'React.js',
            'Vite',
            'ArcGIS API for Javascript',
            'Supabase',
            'PostgreSQL',
            'ChatGPT',
            'Feature Services',
            'Github Actions'
        ],
        details: `This application visualizes U.S. Continuum of Care (CoC) Point-in-Time (PIT) homelessness data by year, population group, and shelter type.

The data are based on HUD’s PIT counts, which measure the number of sheltered and unsheltered people experiencing homelessness on a single night in late January. This dashboard uses 2007–2024 PIT counts aggregated at the CoC level and displayed using HUD Continuum of Care boundary datasets.

PIT data are reported by local CoCs to HUD and undergo limited federal quality review. Any missing, incomplete, or inconsistent values reflect gaps or limitations in the original HUD PIT survey submissions, not the application itself. Counts may vary across locations and years due to differences or changes in local counting methods and should be interpreted as a snapshot in time rather than an annual total.`
    },
    //Tj Suitability
    {
        slug: 'Trader Joe\'s Suitability',
        title: 'Trader Joe\'s Suitability',
        image: '/mappng/TJSuitability.png',
        appLink: 'https://nevinm.com/trader-joes-suitability/',
        github: 'https://github.com/NMGIS/trader-joes-suitability',
        stack: [
            'React.js',
            'ArcGIS API for Javascript',
            'ESRI Living Atlas',
            'Feature Services',
            'GeoJSON',
            'Github Actions',
            'Open Routing Service'
        ],
        details: `This web app identifies high-potential locations for Trader Joe’s by analyzing demographic, economic, and walkability data at the block group level. Users can explore suitability, visualize service areas, and interact with multiple data layers to compare locations.`
    },
    //Thrift Book Detection
    {
        slug: 'thrift-book-detection',
        title: 'Thrift Book Detection',
        summary: 'A web app that uses OCR to help users quickly locate specific books on disorganized thrift store shelves.',
        image: '/mappng/ThriftBook.png',
        appLink: 'https://nevinm.com/thrift-book-detector/',
        github: 'https://github.com/NMGIS/thrift-book-detector',
        stack: [
            'Google Cloud Vision API',
            'React.js',
            'Flask (RESTful API)',
            'Python 3.11',
            'HTML & CSS'
        ],
        details: `The app takes an image of a bookshelf, extracts text using Google OCR, and highlights user-specified book titles. Matched results are animated on-screen using React overlays.`
    },
    // CBSA Viewer
    {
        slug: 'cbsa-viewer',
        title: 'Core-Based Statistical Area Viewer',
        image: '/mappng/CoreBasedStat.png',
        appLink: 'https://nevinm.com/CBSA-Geographic-Viewer/',
        github: 'https://github.com/NMGIS/CBSA-Geographic-Viewer',
        stack: [
            'Mapbox GL JS',
            'GeoJSON',
            'Mapbox Vector Tileset',
            'ArcGIS Pro',
            '2020 Census Tiger/Line'
        ],
        details: `I've developed a web application using the Mapbox GL platform to explore a concept I've been interested in: cities and towns that straddle state lines yet share economic activities. To better understand where these areas are located, I used Census data and geographic statistical areas defined by the OMB (Office of Management and Budget). If you're intrigued by this concept and would like to contribute to the application, I'd be delighted to collaborate.`,
        upcoming: [
            'Summary of population',
            'Demographic breakdown',
            'Census table upload',
            'Send me other ideas! Or get involved on GitHub!'
        ]
    },
    // Emerging Hotspots Boise
    {
        slug: 'emerging-hotspots',
        title: 'Motor Vehicle Crash Emerging Hotspots | Boise Metro Area',
        summary: 'I’ve been fascinated with ArcGIS Pro’s space-time cube and its statistical analysis capabilities. To explore this further, I analyzed motor vehicle crash data from the Idaho Transportation Department. Focusing on the Boise Metropolitan Area, I created a space-time cube and conducted an emerging hotspot analysis. This analysis is more meaningful on a local scale due to the uneven distribution of roads in rural and urban areas. Below is an outline of my methodology and documentation of this analysis.',
        image: '/mappng/EMHSLarge.png',
        appLink: 'https://experience.arcgis.com/experience/2f98e2bd0c874381979c728b864cb57f/',
        stack: [
            'ArcGIS Pro',
            'Space Time Cube',
            'Emerging Hot Spot Tool',
            'ITD crash data',
            'ArcGIS Hub'
        ],
        additionalImages: [
            {
                src: '/mappng/Accidentschart.jpg',
                caption: 'Temporal distribution of crashes from 2012–2023'
            },
            {
                src: '/mappng/CalHeat.jpg',
                caption: 'Calendar heatmap of crash incidents (2005 sample)'
            }
        ],
        details: `
        <h3>STEP 1: Analyze Data | Geographic and Temporal</h3>
        <ul>
            <li>How is the data geographically distributed? - This data displays the geographic point location of incidents. Incidents occur on roadways and are more frequent in urban areas.</li>
            <li>How is the data temporally distributed? - To understand this, I used ArcGIS Pro's visualize statistics tool. 2012 and late 2023 excluded due to incomplete data; minor dip in 2020 noted. See images below.</li>
        </ul>
        <br/>
        <h3>STEP 2: Subset Data | Geographic and Temporal</h3>
        <ul>
            <li>Data limited to Ada and Canyon counties using spatial selection. Incomplete years removed with attribute queries.</li>
        <ul/>
        <br/>
        <h3>STEP 3: Create Space   Time Cube | Parameters</h3>
        <ul>
            <li><strong>Time Step:</strong> 1-month intervals for granularity and significance.</li>
            <li><strong>Distance Interval:</strong> 330 feet (approximate block length).</li>
        </ul>
        <br/>
        <h3>STEP 4: Space Time Cube Explorer</h3>
        <ul>
            <li>Used ESRI’s <a href="https://spatialstats-analysis-1.hub.arcgis.com/pages/space-time-cube-explorer" target="_blank" rel="noopener noreferrer">Space Time Cube Explorer</a> add-in for visualization and interaction enhancements.</li>
        <ul/>
        <br/>
        <h3>STEP 5: Emerging Hot Spot Analysis | Parameters</h3>
        <ul>
            <li><strong>Conceptualization:</strong> K-nearest neighbors chosen for flexibility in rural areas.</li>
            <li><strong>Neighbors:</strong> 15 spatial, 48 time steps (4 years).</li>
            <li><strong>Clustering:</strong> Strong negative Z-score, significant p-value from ANN test.</li>
        </ul>
        <br/>
        <h3>STEP 6: Results Discussion</h3>
        <ul>
            <li>Consistent urban hotspots and sporadic rural trends validated the model’s accuracy and value for crash analysis.</li>
        <ul/>
        `
    },
    // 24/7 Supermarket
    {
        slug: '247-supermarket',
        title: '24/7 Supermarket Map',
        image: '/mappng/supermarkets.png',
        appLink: 'https://nmgis.github.io/24-7-Supermarket-Map/',
        github: 'https://github.com/NMGIS/24-7-Supermarket-Map.github.io',
        stack: [
            'ArcGIS API for JavaScript 4.18',
            'GeoJSON',
            'GitHub Pages',
            'Pandas & GeoPandas',
            'Python 3.9.7'
        ],
        details: `
        <p>This interactive map displays 24/7 supermarkets across the contiguous U.S. and is designed as a living resource — users can contribute by adding or removing stores through GitHub.</p>
        <br/>
        <p>The app features two layers:</p>
        <p> - At the national view, each state's symbology is based on its most common 24/7 chain.</p>
        <p> - When zoomed in, individual store locations are shown.<p/>
        <br/>
        <p>The project includes a GitHub Actions workflow to automate data updates. When the GeoJSON store layer is modified, a CI/CD pipeline triggers spatial joins and publishes updated layers automatically — demonstrating a lightweight DevOps approach using open data and web mapping tools.</p>
        `
    },
    // Spokane Crime
    {
        slug: 'spokane-crime-dashboard',
        title: 'Spokane WA Crime Dashboard',
        image: '/mappng/SpokaneCrime.png',
        appLink: 'https://experience.arcgis.com/experience/30236e315d8c4e599d0aed1c2903cca6/page/Crime-Per-Capita/',
        stack: ['ArcGIS Dashboards', '2021 CompStat Data', 'Census 2010', 'Web Visualization'],
        details: `
            <p>According to <a href="https://www.alarms.org/top-100-most-dangerous-cities-in-america/" target="_blank" rel="noopener noreferrer">Alarms.org</a>, Spokane ranks #2 among the Top 100 Most Dangerous Large Cities in America.</p>

            <p>The Spokane Police Department releases a weekly <a href="https://my.spokanecity.org/police/prevention/compstat/" target="_blank" rel="noopener noreferrer">CompStat report</a> that maps crime statistics by police district. I used the year-end 2021 report to build a series of dashboards that break down crime types by geography and district.
            Spokane PD is currently transitioning to the <a href="https://www.fbi.gov/services/cjis/ucr/nibrs" target="_blank" rel="noopener noreferrer">NIBRS reporting system</a>, which may provide improved detail on the city’s disproportionately high larceny rates.To normalize crime data, I used 2010 Census population figures to calculate crime per capita (CPC). These figures will be updated to reflect 2020 Census data when available.</p>
            `
    },
    //Wendys
    {
        slug: 'wendys-nugget-bucket',
        title: 'Wendy’s Nugget Bucket Locations',
        image: '/mappng/Wendys.png',
        appLink: 'https://nevinm.com/WendysNuggetBucket/',
        github: 'https://github.com/NMGIS/WendysNuggetBucket',
        stack: ['HTML', 'CSS', 'ArcGIS API for JavaScript (v4.21)', 'Github Pages'],
        details: `
        <p>If you're feeling hungry, you can pick up a bucket of chicken nuggets from these locations.</p>
        <p>Just a fun GIS experiment — not affiliated with Wendy’s. The map app is fully interactive and built using ArcGIS Online Web AppBuilder.</p>
        `,
        embedUrl: 'https://nevinm.com/WendysNuggetBucket/',
    },
    //cursors
    {
        slug: 'arcpy-cursors',
        title: 'Working with Arcpy Cursors',
        summary: 'Guide to using SearchCursor, UpdateCursor, and InsertCursor for common GIS ETL tasks.',
        image: '/mappng/ArcpyCursors.png',
        customRoute: '/resources/arcpy-cursors',
        stack: ['ArcGIS Pro', 'Python', 'Arcpy'],
        details: `...`,
        externalOnly: true
    },
    // crooks fire
    {
        slug: 'crooks-fire',
        title: 'Crooks Fire dNBR - Google Earth Engine',
        summary: 'Burn severity (dNBR) of the 2022 Crooks Fire using Landsat 9 imagery via Google Earth Engine.',
        image: '/mappng/Crooksfire.png',
        appLink: 'https://nevinmcintyregis.users.earthengine.app/view/crooksfirednbr',
        github: 'https://code.earthengine.google.com/e996f1c586c4d5be9e163d73290e78fb',
        stack: [
            'Google Earth Engine',
            'Landsat 9',
            'NIFC Open Data',
            'JavaScript',
            'GeoJSON'
        ],
        details: `
        <p>This web app visualizes the Normalized Burn Ratio (dNBR) of the 2022 Crooks Fire using Google Earth Engine, Landsat 9, and open fire perimeter data from NIFC. The Crooks Fire began on April 18, 2022, about 10 miles south of Prescott, Arizona, and was fully contained by June 24, 2022 after burning 9,402 acres. The primary fuels involved were timber (litter and understory), chaparral, and brush. Officials believe the cause was human-related.If you’re interested in replicating this project, I’ve included step-by-step guidance below. Once set up, it’s easy to adapt the same workflow for any wildfire event using GEE’s extensive <a href="https://developers.google.com/earth-engine/datasets/catalog" target="_blank" rel="noopener noreferrer">data catalog</a>.</p>

        <h4>How to replicate:</h4>
        <ol>
        <li><a href="https://earthengine.google.com/" target="_blank">Create a Google Earth Engine account</a></li>
        <li>Open the <a href="https://code.earthengine.google.com/" target="_blank">Earth Engine Code Editor</a></li>
        <li><a href="https://developers.google.com/earth-engine/cloud/code_editor_quickstart" target="_blank">Create a Cloud Project</a></li>
        <li>Write your JavaScript</li>
        <ul>
            <li>Update GeoJSON boundary</li>
            <li>Select Landsat imagery</li>
            <li>Adjust color schemes</li>
        </ul>
        <li>Save and run your script</li>
        <li>Deploy as an Earth Engine app</li>
        </ol>
        <br/>
        <p>Here’s my original <a href="https://code.earthengine.google.com/e996f1c586c4d5be9e163d73290e78fb" target="_blank">JavaScript script on GEE</a> (you will need a Google Earth Engine account to view).</p>
        `,
        embedUrl: 'https://nevinmcintyregis.users.earthengine.app/view/crooksfirednbr',
    },
    //parkway fire
    {
        slug: 'parkway-fire',
        title: 'Parkway Fire dNBR – Google Earth Engine',
        image: '/mappng/ParkwayFire.png',
        appLink: 'https://nevinmcintyregis.users.earthengine.app/view/parkway-fire-dnbr',
        stack: ['Google Earth Engine', 'Landsat 9', 'JavaScript', 'Post Falls NIFC Data'],
        details: `
            <p>This map visualizes the dNBR (Differenced Normalized Burn Ratio) of the Parkway Fire in Post Falls, Idaho using Google Earth Engine, Landsat 9 imagery, and NIFC open data. The Parkway Fire began on August 4, 2022, in the Post Falls Community Forest (Quemlin Park) and burned 80 acres. The fire was caused by an unattended campfire and has since been fully contained.</p>
            <br/>
            <p>Check out some critters found in the Post Falls Community Forest using my <a href="/projects/wildlife-locations">Wildlife Quick Capture app</a>.</p>
            `,
        embedUrl: 'https://nevinmcintyregis.users.earthengine.app/view/parkway-fire-dnbr',

    },
    //felt
    {
        slug: 'kootenai-boat-launch',
        title: 'Kootenai County Boat Launch - Felt',
        summary: 'A community-based boat launch map using the Felt platform, showcasing collaboration potential and low-code GIS publishing.',
        image: '/mappng/KootenaiBoatLauch.png',
        appLink: 'https://felt.com/map/Kootenai-County-Boat-Launch-9BR2ky4f6Q7O9BMSazCCNMDD?loc=47.6797,-116.6858,10.45z&share=1',
        stack: ['Felt', 'GeoJSON'],
        details: `This is a public-facing proof of concept map for Kootenai County. The county currently does not have a modern web map of their boat launches.While not commissioned by the county, the hope is that they might consider it or something similar to help communicate with the public. This map could be used to update the public on closures, algal blooms, and potential hazards. I found the Felt platform to be intuitive and powerful, and I’m excited to keep exploring its capabilities.`
    },
    {
        slug: 'kootenai-hpi',
        title: 'Kootenai County HPI 1985–2022',
        image: '/mappng/HPICube.png',
        appLink: 'https://nevinmcintyregis.maps.arcgis.com/apps/instant/3dviewer/index.html?appid=91692f610aa8486185b9e21fd501e9fe',
        stack: ['ArcGIS Pro', 'Space-Time Cube', '3D Viewer'],
        details: 'I utilized a Space-time cube to display the House Price Index (HPI) over time within Kootenai County. The Space-time cube is an innovative geospatial analysis tool that combines spatial and temporal data, allowing us to visualize changes and patterns across both dimensions simultaneously. Instead of employing elevation as the third dimension, time is used, enabling a dynamic representation of HPI changes over defined locations within the county.In my view, the most compelling use case for a Space-time cube lies in its ability to aggregate point data and create predictive hot spots. By aggregating points, we can efficiently analyze high-density areas and identify significant patterns within the data. My web application uses data with predefined locations, which provides valuable insights but does not fully showcase the potential of the Space-time cube.'
    },
    {
        slug: 'wildlife-locations',
        title: 'Wildlife Locations – Quick Capture',
        image: '/mappng/WildlifeLocations.png',
        appLink: 'https://nevinmcintyregis.maps.arcgis.com/apps/instant/attachmentviewer/index.html?appid=b2c3ff9539434854b126000c7914f900',
        stack: ['ArcGIS Quick Capture', 'Hosted Feature Layers', 'Attachment Viewer'],
        details: 'This project uses ArcGIS Quick Capture to document wildlife sightings while hiking. It’s designed to be fast and field-friendly — tap a button, take a photo, and the geotagged data uploads to ArcGIS Online.'
    },
    {
        slug: 'send-me-project-ideas',
        title: 'Send Me Project Ideas!',
        summary: 'I’ll collaborate on unique geospatial or web ideas—for free if they’re interesting!',
        image: '/mappng/ProjectIdeas.png',
        appLink: 'https://linktr.ee/NMGIS',
        github: '',
    },

];
