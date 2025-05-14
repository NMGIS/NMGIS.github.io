import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Cursors = () => (
  <div className="content-region">
    <h2>GIS Joins and Appends (Arcpy Cursors)</h2>

    <p>
      Arcpy cursors have been my go-to GIS tool for the past three years. Why? Within the ESRI GIS ecosystem,
      they are incredibly efficient for joining and appending data. I've saved countless hours using them, and it's
      always rewarding to see colleagues impressed by the efficiency of my work. These are excellent for repetitive workflows, such as when a new dataset is created or refreshed on a regular schedule.
    </p>
    <br/>
    <p>
      ESRI Documentation:&nbsp;
      <a href="https://pro.arcgis.com/en/pro-app/latest/arcpy/data-access/searchcursor-class.htm" target="_blank" rel="noopener noreferrer">SearchCursor</a> |&nbsp;
      <a href="https://pro.arcgis.com/en/pro-app/latest/arcpy/data-access/insertcursor-class.htm" target="_blank" rel="noopener noreferrer">InsertCursor</a> |&nbsp;
      <a href="https://pro.arcgis.com/en/pro-app/latest/arcpy/data-access/updatecursor-class.htm" target="_blank" rel="noopener noreferrer">UpdateCursor</a>
    </p>
    <br/>
    <h3>Search and Update (Join)</h3>
    <p>
      Configure the feature_class, table, join_field, update_fields, and target_fields variables. Ensure the target feature
      class has the appropriate schema/fields.
    </p>

    <SyntaxHighlighter language="python" style={tomorrow}>
{`target_feature_class = r"Path to your feature class"
join_tableOrFC = r"Path to feature class or table to be joined"

join_field = 'Common field name'

# List of fields to update
update_fields = ['Field1', 'Field2', 'Field3', 'Field4', 'Field5', 
                 'Field6', 'Field7', 'Field8', 'Field9', 'Field10']

# Corresponding list of field names in the feature class that will be updated
target_fields = ['Field1', 'Field2', 'Field3', 'Field4', 'Field5', 
                 'Field6', 'Field7', 'Field8', 'Field9', 'Field10']


# Create a dictionary to hold data from the table
values_dict = {}
with arcpy.da.SearchCursor(join_tableOrFC, [join_field] + update_fields) as search_cursor:
    for row in search_cursor:
        # Use the join_field value as the key and the rest of the row as the value
        values_dict[row[0]] = row[1:]

# Update the feature class using the values from the dictionary
with arcpy.da.UpdateCursor(target_feature_class, [join_field] + target_fields) as update_cursor:
    for row in update_cursor:
        key = row[0]
        if key in values_dict:
            # Update the row with the values from the dictionary
            update_cursor.updateRow((key,) + values_dict[key])
print("Update complete.")`}
    </SyntaxHighlighter>

    <h3>Search and Insert (Append)</h3>
    <p>Configure the feature_class, and fields variables. Ensure the target feature class has the appropriate schema/fields.</p>
    <SyntaxHighlighter language="python" style={tomorrow}>
{`import arcpy
# Paths to your feature classes
feature_class_1 = "path_to_feature_class_1"
feature_class_2 = "path_to_feature_class_2"

# Manually define the fields for both feature classes
fields_fc1 = ['field1', 'field2', 'field3']  # Replace with actual field names from feature_class_1
fields_fc2 = ['field1', 'field2', 'field3']  # Replace with actual field names from feature_class_2

# Open a search cursor on the second feature class (source)
with arcpy.da.SearchCursor(feature_class_2, fields_fc2) as search_cursor:
    # Open an insert cursor on the first feature class (target)
    with arcpy.da.InsertCursor(feature_class_1, fields_fc1) as insert_cursor:
        for row in search_cursor:
            # Create a list to hold the new row values
            new_row = []
            
            # Manually map the fields or set custom values
            new_row[fields_fc1.index('SHAPE@')] = row[fields_fc2.index('SHAPE@')]
            new_row.append(row[fields_fc2.index('field1')])  # Map field1 to field1
            new_row.append("AnyStringValue")  # Set a custom value for field2
            new_row.append(row[fields_fc2.index('field3')])  # Map field3 to field3
            
            # Insert the new row into the first feature class
            insert_cursor.insertRow(new_row)

print("Data appended successfully.")`}
    </SyntaxHighlighter>
  </div>
);

export default Cursors;
