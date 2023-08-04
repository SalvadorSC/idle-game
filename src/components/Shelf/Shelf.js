import React, { memo, useEffect, useMemo } from "react";
import Dagre from "@dagrejs/dagre";
import BookNode from "../CustomNode/CustomNode";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import upgradesInformation from "../../data/upgradesInfo.json";
import "./Shelf.css";

export const Shelf = memo(() => {
  const { upgradesInfo } = upgradesInformation;
  const nodeInfo = { position: { x: 0, y: 0 }, type: "bookNode" };

  const initialNodes = upgradesInfo.map((upgradeInfo, index) => {
    return {
      id: (index + 1).toString(),
      data: {
        upgradeInfo,
        /* selects: {
          ...node.data.selects,
        }, */
      },
      ...nodeInfo,
    };
  });
  const initialEdges = [
    { type: "smoothstep", id: "1-2", source: "1", target: "2" },
    { type: "smoothstep", id: "2-3", source: "2", target: "3" },
    { type: "smoothstep", id: "3-4", source: "3", target: "4" },
    { type: "smoothstep", id: "3-5", source: "3", target: "5" },
    { type: "smoothstep", id: "4-6", source: "4", target: "6" },
    { type: "smoothstep", id: "4-7", source: "4", target: "7" },
    { type: "smoothstep", id: "5-8", source: "5", target: "8" },
    { type: "smoothstep", id: "6-9", source: "6", target: "9" },
    { type: "smoothstep", id: "7-10", source: "7", target: "10" },
    { type: "smoothstep", id: "8-11", source: "8", target: "11" },
    { type: "smoothstep", id: "10-12", source: "10", target: "12" },
    { type: "smoothstep", id: "11-13", source: "11", target: "13" },
    { type: "smoothstep", id: "12-14", source: "12", target: "14" },
    { type: "smoothstep", id: "9-15", source: "9", target: "15" },
    { type: "smoothstep", id: "15-16", source: "15", target: "16" },
    { type: "smoothstep", id: "11-17", source: "11", target: "17" },
  ];

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const nodeTypes = useMemo(() => ({ bookNode: BookNode }), []);
  const { fitView } = useReactFlow();
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

  useEffect(() => {
    g.setGraph({ rankdir: "TB", ranksep: 70, edgesep: 200, nodesep: 200 });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) =>
      g.setNode(node.id, { ...node, width: 100, height: 100 })
    );

    Dagre.layout(g);

    setNodes(
      nodes.map((node) => {
        const { x, y } = g.node(node.id);

        return { ...node, position: { x, y } };
      })
    );
    setEdges(edges);
    window.requestAnimationFrame(() => {
      fitView();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shelf-container" style={{ width: "80%", height: "80vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        {/*  <Panel></Panel> */}
        <Background />
        {/* <MiniMap /> */}
        <Controls />
      </ReactFlow>
    </div>
  );
});
