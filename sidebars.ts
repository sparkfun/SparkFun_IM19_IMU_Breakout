import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Hardware',
            link: {
                type: 'generated-index'
            },
            collapsed: false,
            items: [
                // {
                //     type: 'doc',
                //     id: 'connectivity',
                //     customProps: {
                //         ble_name: 'SparkFun TX2',
                //     },
                // },
                'hardware_overview',
                'hardware_assembly',
            ]
        },
        {
            type: 'category',
            label: 'Software',
            link: {
                type: 'generated-index'
            },
            collapsed: false,
            items: [
                'software_overview',
                'software_configuration',
            ]
        },
        {
            type: 'category',
            label: 'Resources & Support',
            link: {
                type: 'generated-index'
            },
            collapsed: false,
            items: [
                'resources',
                // 'warranty_and_returns',
                {
                    type: 'category',
                    label: 'Technical Support',
                    link: {
                        type: 'generated-index'
                    },
                    collapsed: true,
                    items: [
                        'troubleshoot',
                        'github/file_issue',
                        'github/contribute'
                    ]
                },
            ]
        }
    ]
};

export default sidebars;
