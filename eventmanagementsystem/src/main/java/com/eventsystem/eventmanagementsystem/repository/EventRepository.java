package com.eventsystem.eventmanagementsystem.repository;

import com.eventsystem.eventmanagementsystem.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
//comment
//comment