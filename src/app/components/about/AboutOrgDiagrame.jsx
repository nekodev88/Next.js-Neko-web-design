// "use client";

// import React, { useState, useEffect } from "react";
// import { Tree, TreeNode } from "react-organizational-chart";
// import _ from "lodash";
// import clsx from "clsx";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Avatar from "@mui/material/Avatar";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { styled } from "@mui/system";
// import { useLanguage } from "../ClientLayout"; // Import useLanguage hook

// // Custom Styles
// const useStyles = styled((theme) => ({
//   root: {
//     background: "white",
//     display: "inline-block",
//     borderRadius: 16,
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginTop: -10,
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.short,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: "#ECECF4",
//   },
// }));

// // Organization Component
// function Organization({ org, onCollapse, collapsed }) {
//   const classes = useStyles();

//   return (
//     <Card variant="outlined" className={classes.root}>
//       <div className="flex items-center justify-center gap-3">
//         <Avatar className={classes.avatar} />
//         <CardHeader title={org.tradingName} />
//       </div>

//       <div className="flex items-center justify-center gap-3">
//         <Typography variant="body2" className={classes.headerText}>
//           {org.position}
//         </Typography>
//         <div>|</div>
//         <Typography variant="body2" color="textSecondary">
//           {org.email}
//         </Typography>
//       </div>

//       <IconButton
//         size="small"
//         onClick={onCollapse}
//         className={clsx(classes.expand, {
//           [classes.expandOpen]: !collapsed,
//         })}
//       >
//         <ExpandMoreIcon />
//       </IconButton>
//     </Card>
//   );
// }

// // Account Component
// function Account({ a }) {
//   const classes = useStyles();

//   return (
//     <Card variant="outlined" className={classes.root}>
//       <div className="flex items-center justify-center">
//         <Typography variant="body2" className={classes.headerText}>
//           {a.name}
//         </Typography>
//       </div>
//       <Typography variant="body2" color="textSecondary">
//           {a.position}
//       </Typography>
//     </Card>
//   );
// }

// // Product Component
// // function Product({ p }) {
// //   const classes = useStyles();
// //   return (
// //     <Card variant="outlined" className={classes.root}>
// //       <div className="flex items-center justify-center gap-3">
// //         <Typography variant="body2" color="textSecondary">
// //           {p.name}
// //         </Typography>
// //         <div>|</div>
// //         <Typography variant="body2" color="textSecondary">
// //           {p.position}
// //         </Typography>
// //       </div>
// //     </Card>
// //   );
// // }

// // Node Component (TreeNode)
// function Node({ o, parent }) {
//   const [collapsed, setCollapsed] = React.useState(o.collapsed);
//   const handleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   React.useEffect(() => {
//     o.collapsed = collapsed;
//   });

//   const T = parent
//     ? TreeNode
//     : (props) => (
//         <Tree
//           {...props}
//           lineWidth={"2px"}
//           lineColor={"#bbc"}
//           lineBorderRadius={"12px"}
//         >
//           {props.children}
//         </Tree>
//       );

//   return collapsed ? (
//     <T
//       key={o.tradingName}
//       label={
//         <Organization
//           org={o}
//           onCollapse={handleCollapse}
//           collapsed={collapsed}
//         />
//       }
//     />
//   ) : (
//     <T
//     key={o.tradingName}
//       label={
//         <Organization
//           org={o}
//           onCollapse={handleCollapse}
//           collapsed={collapsed}
//         />
//       }
//     >
//       {_.map(o.account, (a, index) => (
//         <TreeNode label={<Account a={a} key={index}/>}>
//           {/* <TreeNode label={<Product p={a.product} />} /> */}
//         </TreeNode>
//       ))}
//       {_.map(o.organizationChildRelationship, (c, index) => (
//         <Node key={index} o={c} parent={o} />
//       ))}
//     </T>
//   );
// }

// // Main Component
// export default function AboutOrgDiagrame() {
//   const { content } = useLanguage(); // Get content from useLanguage hook

//   const [organizationData, setOrganizationData] = useState(null);

//   useEffect(() => {
//     if (content) {
//       const aboutOrganizationCeo =
//         content.about_section[4].about_organization[1].ceo || {};

//       // สร้างข้อมูลต้นไม้ที่ใช้ใน AboutOrgDiagrame
//       const orgData = {
//         tradingName: aboutOrganizationCeo.name,
//         position: aboutOrganizationCeo.position,
//         email: aboutOrganizationCeo.email,
//         organizationChildRelationship: [
//           {
//             tradingName: "Jack",
//             position: "General Administrator",
//             email: "Jack@gmail.com",
//             account: [
//               {
//                 name: "JJ",
//                 position: "Personnel Administrator",
//               }
//             ]
//           },
//           {
//             tradingName: "Jill",
//             position: "General Administrator",
//             email: "Jack@gmail.com",
//             account: [
//               {
//                 name: "JJ",
//                 position: "Front-end",
//               },
//               {
//                 name: "JJ",
//                 position: "Front-end",
//               },
//               {
//                 name: "JJ",
//                 position: "Back-end",
//               },
//               {
//                 name: "JJ",
//                 position: "Full stack",
//               },
//               {
//                 name: "JJ",
//                 position: "Flutter",
//               },
//               {
//                 name: "JJ",
//                 position: "Flutter",
//               },
//             ],
//           },
//           {
//             tradingName: "John",
//             position: "General Administrator",
//             email: "Jack@gmail.com",
//             account: [
//               {
//                 name: "JJ",
//                 position: "Accountant"
//                 // product: { name: "Product" }
//               },
//               {
//                 name: "JJ",
//                 position: "Graphic design"
//               },
//               {
//                 name: "JJ",
//                 position: "UX-Ui designer"
//               },
//               {
//                 name: "JJ",
//                 position: "Admin"
//               }
//             ]
//           },
//           // {
//           //   tradingName: aboutOrganizationTitle.general_em,
//           //   account: aboutOrganizationGeneral_em.map(em => ({
//           //     name: em.name,
//           //     product: { name: em.position }
//           //   }))
//           // }
//         ],
//       };

//       setOrganizationData(orgData);
//     }
//   }, [content]);

//   if (!organizationData) return <div>Loading...</div>;

//   return (
//     <Box bgcolor="background" padding={4} height="auto" marginTop={10} sx={{
//       height: "auto", // ความสูงที่ยืดหยุ่น
//       overflowX: "auto", // เปิดให้เลื่อนในแนวนอน
//       whiteSpace: "nowrap", // ป้องกันไม่ให้เนื้อหาล้นออกจากกรอบ
//     }}>
//       <Node o={organizationData} />
//     </Box>
//   );
// }
