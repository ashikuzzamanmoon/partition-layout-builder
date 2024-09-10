# Partition Layout Builder

## Description

The **Partition Layout Builder** is a responsive web application that allows users to dynamically split a layout into multiple partitions both horizontally and vertically. Each partition has its own color and can be resized by dragging. Users can also remove partitions or further subdivide them. Optionally, partitions snap to specific ratios (1/4, 1/2, 3/4).

## Features

1. **Initial Partition**: The application starts with an initial partition that can be split vertically or horizontally.
2. **Splitting**: Clicking the `V` button splits a partition vertically, while the `H` button splits it horizontally. One partition retains its original color, and the new partition is assigned a random color.
3. **Further Splitting**: Newly created partitions can also be split further, allowing for recursive partitioning.
4. **Removing Partitions**: Any partition can be removed by clicking the `Remove` button.
5. **Resizing Partitions**: Partitions are resizable by dragging, allowing for flexible layout management.
6. **Responsive Design**: The partitions resize dynamically based on the window size.
7. **Optional Snapping**: Partitions optionally snap to 1/4, 1/2, and 3/4 ratios when resizing.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **React-Resizable**: A library for adding resizable functionality to partitions.
- **CSS Grid/Flexbox**: Used for responsive and flexible layout design.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/partition-layout-builder.git
   cd partition-layout-builder
   ```
