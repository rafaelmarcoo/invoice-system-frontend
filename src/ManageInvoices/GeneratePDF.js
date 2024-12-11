import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: 'Helvetica',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      section: {
        marginBottom: 10,
      },
      table: {
        display: 'table',
        width: '100%',
        marginTop: 10,
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableCol: {
        flexGrow: 1,
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
      },
      tableHeader: {
        fontWeight: 'bold',
      },
      totalRow: {
        fontWeight: 'bold',
        textAlign: 'right',
      },
});

export const GeneratePDF = ({ company, client, invoice }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>

                <View stlye={styles.section}>
                    <Text style={{ fontWeight: 'bold' }}>Invoice To:</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </Page>
        </Document>
    );
};