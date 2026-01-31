"use client";

import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Stack } from "@mui/material";

export default function Page() {
  const leftLinks = ["Home", "My Network", "Jobs", "Messaging"];
  const feedPosts = [
    { id: 1, name: "Pratham Patel", content: "Hello, this is my first post!" },
    { id: 2, name: "Raj Patil", content: "Learning Next.js with MUI is fun!" },
    { id: 3, name: "Sneha Jain", content: "Next.js + MUI is awesome!" },
  ];
  const rightSuggestions = ["Person A", "Person B", "Person C", "Person D"];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: { xs: 2, md: 4 },
        flexWrap: { xs: "wrap", md: "nowrap" },
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Left Sidebar */}
      <Card
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 18%" },
          minHeight: { md: "500px" }, // make taller on desktop
          boxSizing: "border-box",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <Stack spacing={1}>
            {leftLinks.map((link) => (
              <Typography key={link} variant="body2">
                {link}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </Card>

      {/* Middle Feed Column */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "2.5 1 60%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {feedPosts.map((post) => (
          <Card key={post.id} sx={{ boxSizing: "border-box" }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar>{post.name.charAt(0)}</Avatar>
                <Typography variant="subtitle1">{post.name}</Typography>
              </Stack>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right Sidebar */}
      <Card
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 18%" },
          minHeight: { md: "500px" }, // make taller on desktop
          boxSizing: "border-box",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Suggestions
          </Typography>
          <Stack spacing={1}>
            {rightSuggestions.map((person) => (
              <Typography key={person} variant="body2">
                {person}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
