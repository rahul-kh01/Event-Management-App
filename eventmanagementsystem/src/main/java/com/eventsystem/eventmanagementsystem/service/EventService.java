package com.eventsystem.eventmanagementsystem.service;

import com.eventsystem.eventmanagementsystem.model.Attendee;
import com.eventsystem.eventmanagementsystem.model.Event;

import java.util.List;
import java.util.Optional;

public interface EventService {
    public Event saveEvent(Event event);
    public List<Event> getAllEvents();

  public Optional<Event> findById(Long id);

    public Event updateEvent(Long id, Event eventDetails);

   public String deleteById(Long id);

    public Event registerAttendee(Long id, Attendee attendee);
}

//comment